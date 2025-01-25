Comment cela fonctionne lorsque l'on utilise un client component dans un server component

Exemple : 

    <ServeurComponent> <ClientComponent/> </Serveur Component>

Un Server Component est pré-rendu sur le serveur lors de la requête et renvoyé sous forme de HTML statique au client.

Le Client Component est marqué pour être hydraté sur le client avec 'use client'
Next.js le retire du rendu serveur et envoie uniquement un placeholder HTML à la place.
Next.js génère un placeholder pour le Client Component.
Donc Serveur ServeurComponent : 

<div>
  <h1>Page Server Component</h1>
  <div data-next-hydrate="xyz"></div>
</div>

Une fois le JavaScript chargé sur le client, Next.js remplace le placeholder (<div data-next-hydrate="xyz"></div>) par 
le ClientComponent
Le Server Component ne contient que du HTML et est traité entièrement sur le serveur.
Le Client Component est ignoré côté serveur et hydraté ensuite sur le client.

En plus du HTML, Next.js envoie un JSON caché (inséré dans une <script> tag) contenant des informations sur les 
composants à hydrater. Cela peut ressembler à :

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

Lorsque le navigateur charge le JavaScript de Next.js :

Next.js analyse le JSON d’hydratation (__NEXT_DATA__).
Il récupère l’identifiant xyz, trouve la correspondance avec ClientComponent, et télécharge son bundle (ClientComponent.js).
Il remplace dynamiquement le <div data-next-hydrate="xyz"></div> par le vrai Client Component :