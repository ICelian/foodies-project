Utilisation d’un Client Component dans un Server Component

Fonctionnement

Lorsqu’un Client Component est utilisé à l’intérieur d’un Server Component, voici comment cela fonctionne :

Exemple :

<ServerComponent>
  <ClientComponent/>
</ServerComponent>

Rendu côté serveur

Un Server Component est pré-rendu sur le serveur lors de la requête et renvoyé sous forme de HTML statique au client.

Un Client Component est marqué avec 'use client', ce qui indique à Next.js qu'il doit être hydraté sur le client.

Next.js retire le Client Component du rendu serveur et insère uniquement un placeholder HTML à la place.

Exemple de rendu du ServerComponent avant hydratation :

<div>
  <h1>Page Server Component</h1>
  <div data-next-hydrate="xyz"></div>
</div>

Hydratation côté client

Une fois le JavaScript chargé sur le navigateur, Next.js :

Remplace le placeholder (<div data-next-hydrate="xyz"></div>) par le rendu réel du ClientComponent.

Exécute le code du Client Component côté client.

JSON d’hydratation

En plus du HTML, Next.js envoie un fichier JSON caché dans une balise <script>, qui contient des informations sur les composants à hydrater.

Exemple de JSON d’hydratation :

<script id="__NEXT_DATA__" type="application/json">
{
  "hydrationMap": {
    "xyz": {
      "component": "ClientComponent",
      "props": {},
      "file": "/_next/static/chunks/pages/ClientComponent.js"
    }
  }
}
</script>

Processus d’hydratation

Lorsque le navigateur charge le JavaScript de Next.js :

Il lit le JSON d’hydratation (__NEXT_DATA__).

Il identifie les placeholders (data-next-hydrate="xyz") dans le DOM.

Il récupère le fichier du composant (ClientComponent.js).

Si le fichier n’est pas encore téléchargé, il le charge depuis /static/chunks/pages/ClientComponent.js.

Une fois chargé, React exécute le composant et le remplace dynamiquement dans le DOM.

Comment Next.js sait-il quel est le Client Component ?

Grâce au JSON d’hydratation :

"xyz" est un ID unique du composant, généré dynamiquement.

"component": "ClientComponent" indique le nom du composant React.

"file": "/_next/static/chunks/pages/ClientComponent.js" spécifie le chemin vers le fichier JavaScript du composant.

Le JSON ne contient pas directement le code du composant. Il fait uniquement référence à son fichier JavaScript.

Compilation et stockage des fichiers JavaScript

Lors de l’exécution de next build, Next.js :

Compile tous les Client Components en fichiers JavaScript séparés.

Génère un fichier comme /_next/static/chunks/pages/ClientComponent.js contenant le code du composant.

Envoie ces fichiers au client, où ils sont stockés en cache et exécutés lorsque nécessaire.

Conclusion

Server Components sont entièrement rendus sur le serveur et envoyés sous forme de HTML statique.

Client Components sont ignorés côté serveur, et leur rendu est différé jusqu’à l’hydratation sur le client.

Next.js utilise un JSON d’hydratation pour faire le lien entre le placeholder HTML et le code JavaScript du composant à charger.

Cela permet de réduire le poids du HTML initial tout en chargeant dynamiquement les composants interactifs uniquement lorsque nécessaire.