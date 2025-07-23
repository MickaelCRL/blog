---
title: 'En C#, "this" dans une classe parente ne devient pas le type de l’enfant'
authors: mickael
date: 2025-07-23
slug: /this-classe-parente
---

Dans mon projet [RentCRL](https://github.com/MickaelCRL/RentCRL), j’ai plusieurs types d’utilisateurs : `User`, `Owner`, etc.

Comme souvent en test, j’ai voulu faire un **builder fluide** pour créer ces objets proprement.

J’ai donc commencé avec un `UserBuilder`, puis j’ai fait un `OwnerBuilder` qui hérite de `UserBuilder`, en override la méthode `Create()` pour retourner un `Owner` au lieu d’un `User`.

<!-- truncate -->

Je pensais que ça suffirait.

Mais en chaînant les appels :

```csharp
var owner = OwnerBuilder.Build()
    .WithEmail("john@example.com")
    .Create();
```

Je me suis rendu compte que `Create()` ne retournait pas un `Owner`, mais un `User`.

## 1 - Ce que j’ai compris

Même si j’appelais `Build()` sur `OwnerBuilder`, les méthodes `WithX()` venaient de `UserBuilder`, donc elles retournaient... un `UserBuilder`.

Et `this` dans `UserBuilder`, c’est bien le type de la classe de base, **pas celui de la méthode statique `Build()`**.

Donc toute ma chaîne retournait `UserBuilder`, pas `OwnerBuilder`, et au final `Create()` appelait la mauvaise méthode.

## 2 - Ce que j’ai changé

J’ai refait la structure avec une classe générique `UserBuilderGeneric<TBuilder>`, et chaque sous-classe (comme `OwnerBuilder`) devait juste implémenter une méthode `GetBuilder()` qui retourne `this`, mais typée correctement.

Comme ça, toutes les méthodes `WithX()` dans la classe de base peuvent retourner `TBuilder` sans faire de cast.

### 2.1 - Exemple :

```csharp
public abstract class UserBuilderGeneric<TBuilder>
    where TBuilder : UserBuilderGeneric<TBuilder>
{
    protected readonly Fixture _fixture = new();
    protected string _email;

    protected UserBuilderGeneric()
    {
        _email = _fixture.CreateEmail();
    }

    protected abstract TBuilder GetBuilder();

    public TBuilder WithEmail(string email)
    {
        _email = email;
        return GetBuilder();
    }
}
```

```csharp
public class UserBuilder : UserBuilderGeneric<UserBuilder>
{
    protected override UserBuilder GetBuilder() => this;

    public static UserBuilder Build()
    {
        return new UserBuilder();
    }

    public override User Create()
    {
        return new User(...);
    }
}
```

```csharp
public class OwnerBuilder : UserBuilderGeneric<OwnerBuilder>
{
    protected override OwnerBuilder GetBuilder() => this;

    public static OwnerBuilder Build()
    {
        return new OwnerBuilder();
    }

    public override Owner Create()
    {
        return new Owner(...);
    }
}
```

## 3 - Résultat

Je peux maintenant faire :

```csharp
var owner = OwnerBuilder.Build()
    .WithEmail("john@example.com")
    .Create();
```

Et j’ai bien un `Owner` à la fin, sans avoir à dupliquer les `WithX()` dans chaque builder, ni faire de cast.

## 4 - Conclusion

C’est tout bête, mais j’étais persuadé que faire un `override` de `Create()` suffisait.

En fait, non : le `this` dans la classe de base **ne suit pas** le type de la méthode `Build()` dans la sous-classe.

Donc même si `Build()` retourne un `OwnerBuilder`, la chaîne de méthodes repasse en `UserBuilder`, et `Create()` appelle celle de la classe mère.

C’est pas révolutionnaire, mais j’ai trouvé ça intéressant à creuser et ça m’a permis de rendre mes builders plus propres sans copier 10 méthodes.
