# eval-design-patterns

## Lancement du projet

```
npm install
```

```
npm run dev
```

## Description

Le projet contient des catalogues de produits ainsi que des utilisateurs, les utilisateurs sont chacun assigné à un catalogue, ils peuvent y ajouter et retirer des produits. Lorsqu'ils ajoutent ou retirent un produit, les autres utilisateurs reçoivent une notification grâce au pattern Observer.

Un catalogue peux être sauvegarder a tous moment. Il peut également être restaurer à un état précédent grâce au Memento.

Un utilisateur peut créer et imprimer son registre d'opérations, lorsqu'il le crée, on clône toutes ses opérations grâce au pattern Prototype.
