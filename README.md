# OrderApp
Простое Web приложение для приемки заказа на доставку со следующим функционалом:

1. Форма создания нового заказа
2. Форма отображения списка заказов
3. Форма просмотра созданного заказа в режиме чтения.

## Стек
- ASP.NET 9
- Entity Framework
- PostgreSQL
- React
- Vite

## Запуск

- База данных  
  ConnectionString находится в `OrderApp/appsettings.Development.json`, при необходимости его можно там изменить  
  Для первоначального запуска необходимо запустить миграции(запуск из директории OrderApp) `dotnet ef database update`
- Backend  
  директория OrderApp  
  `dotnet run`
- Frontend  
  директория order-app-client  
  `npm run dev`

Приложение запустится на localhost(http://localhost:5173)
