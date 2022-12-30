# andreadonega.github.io

 link per accedere al sito: https://andreadonega.github.io/
 
Per lo sviluppo di questo progetto ho realizzato un framework personale dalla struttura simile a Bootstrap, in modo da poter utilizzare i componenti creati anche in progetti futuri.

Tra i componenti creati ritroviamo : 
- formattazione iniziale del testo, aggiungendo margin ai tag html per la gestione dei titoli e impostandone diverse dimensioni in rem
- un grid system per rendere il layout responsive, che permette di creare rapidamente colonne di diversa grandezza, andando a facilitare le operazioni di allinamento.

Grid system:
Il grid system è stato sviluppato con la proprietà CSS flexbox e rende facile la creazione di colonne di varie dimensioni. In particolare per il progetto è stata creata una griglia dalla dimensione massima che fa da contenitore per gli elementi sottostanti, in modo di avere una suddivisione equa degli spazi di tutta la pagina. All'interno del contenitore principale è stato spesso utilizzato il sistema delle colonne al 50% della larghezza, permettendo la creazione di un layout responsive.

Helpers:
Il sistema di helpers sviluppato permette la gestione di proprietà base come margin, padding e colore dello sfondo in maniera ordinata, utilizzando delle classi standard inserite nell'HTML della pagina.
Questa strategia ha permesso una spaziatura equa e gradevole dei contenuti e ha reso ogni modifica in fase di sviluppo facile ed intuitiva, oltre ad essere riutilizzabile per ogni tipo di progetto futuro.
Inoltre sono stati creati helpers per la gestione delle dimensioni dei testi e per il loro allineamento.

Animazioni:
Per rendere il sito più interattivo e piacevole da scorrere sono state realizzate delle animazioni applicate a molti contenuti utilizzando tre diverse tecniche :
la proprietà keyframes di CSS per realizzare animazioni personalizzate
Javascript, per personalizzare il cursore della pagina e sovrascrivere lo scorrimento standard al click dei collegamenti 
GSAP, una libreria esterna Javascript per creare animazioni fluide e  personalizzate permettendo lo spostamento degli elementi allo scroll con l'aggiunta di una classe HTML e poche proprietà Javascript

Sezione progetti
Per la sezione progetti è stato utilizzato splide.js, una libreria esterna Javascript che ha permesso la realizzazione di uno slider responsive e dalle animazioni fluide.
La sezione progetti è momentaneamente riempita con delle immagini e testi di prova, ma verrà aggiornata in futuro in seguito allo svolgimento di nuovi progetti.
Il bottone "Scopri il progetto" diventerà un link ad una nuova pagina HTML dove verrà presentato il progetto in maniera completa
