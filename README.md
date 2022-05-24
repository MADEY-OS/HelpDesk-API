# HelpDesk-API
Do działania wymaga:
- MongoDB
- Node.js

Uruchomienie:
- w głównym folderze z API => npm install
- odpalanie => node index.js

Testowanie:
- do testowania używałem PostMana

Podstawowe endy:
- /tasks/ => do GET:ALL, POST
- /users/ => do GET:ALL, POST
- /tasks/:id => do GET, PUT, DELETE po id.
- /users/:id => do GET, PUT, DELETE po id.

Przykładowe użycie:
- Dodawanie zadania: w adresie ustawiami http://localhost:3000/tasks/ => dalej w body tworzymy JSONa zgodnie z modelem. Pamiętać o POST!!!
- wyświetlanie wszystkich użytkowników(jeżeli są jacyś): w adresie ustawiamy http://localhost3000/task/ Pamiętać o GET!!!
