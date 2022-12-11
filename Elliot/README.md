#Instructioner för Elliot's CRUD server
Alla kommandon använder port 3000 och URLn:http://localhost:3000/api/text/contact/

##Create
För att spara info i "text" så frågar servern efter vad som ska sparas i "filling", om det inte fylls in om det inte fylls i så kommer ett passande felmeddelande.
När ett nytt objekt skapas i "text" så tar servern automatiskt och ger nästa "id" till den.
![Create](/images/Create.png)

##Read
För att få informationen som blivit sparad i "text" så används bara URLn.
![Read](/images/Read.png)

##Update
För att updatera ett objekt så används URLn + /idet som ska uppdateras. Det går bara att uppdatera "filling"en och inte "id".
![Update](/images/Update.png)

##Delete
För att ta bort ett objekt ur "text" så används URLn + /idet som ska tas bort.
![Delete](/images/Delete.png)
