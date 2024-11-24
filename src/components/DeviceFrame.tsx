{
  /* ... Mise à jour des notifications ... */
}
const notifications = [
  {
    id: 1,
    app: 'WhatsApp',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjMjVEMzY2IiBkPSJNMzgwLjkgOTcuMUMzMzkgNTUuMSAyODMuMiAzMiAyMjQuNyAzMiAxMzYuNSAzMiA2NS40IDEwNC44IDY1LjQgMTkzYzAgNDEuOCAxNi45IDgyLjMgNDYuNiAxMTEuOEwxNjcuMyA0ODBsOTEuMi0yNy45YzM2LjUgMTkuOSA3Ny43IDMwLjQgMTE5LjkgMzAuNGg0LjFjODguMiAwIDE1OS4zLTcyLjggMTU5LjMtMTYxIDAtNDMtMTYuOC04My40LTQ3LjMtMTEzLjl6Ii8+PC9zdmc+',
    color: 'bg-green-500',
    title: 'Hello, World!',
    message: '👋',
    time: 'maintenant',
    bgClass: 'bg-white/90 dark:bg-white/10', // Ajout d'une classe de fond plus opaque en mode clair
  },
];

{
  /* ... Dans le rendu des notifications ... */
}
<div
  key={notification.id}
  className={`${notification.bgClass} backdrop-blur-lg rounded-xl p-4 animate-fade-in hover:bg-white/95 dark:hover:bg-white/20 transition-colors border border-gray-200 dark:border-gray-700`}
>
  {/* ... Le reste du code des notifications reste identique ... */}
</div>;

{
  /* ... Pour les quick apps ... */
}
<div className="grid grid-cols-4 gap-4">
  {quickApps.map((app, index) => (
    <div
      key={index}
      className="aspect-square rounded-2xl bg-white/90 dark:bg-white/10 backdrop-blur-lg p-2 flex items-center justify-center border border-gray-200 dark:border-gray-700"
    >
      <img src={app.icon} alt={app.name} className="w-6 h-6" />
    </div>
  ))}
</div>;
