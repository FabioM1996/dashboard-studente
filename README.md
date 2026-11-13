# Dashboard studente (React)

Dashboard responsive realizzata con React e Vite, ispirata alle immagini fornite.

## Avvio

1. Installa [Node.js](https://nodejs.org/) (versione LTS).
2. Apri il terminale nella cartella del progetto.
3. Esegui:

   ```bash
   npm install
   npm run dev
   ```

4. Apri nel browser l'indirizzo locale mostrato da Vite.

Per creare la versione di produzione: `npm run build`.

## Struttura

- `src/data.js`: contiene in un solo oggetto i dati dello studente, le valutazioni, la frequenza e le note.
- `src/App.jsx`: importa l'oggetto e passa i dati tramite props ai componenti.
- `src/components/`: componenti separati per intestazione, dati anagrafici, valutazioni, frequenza e proposta colloquio.
- `src/styles.css`: stile responsive della dashboard.

## Proposta a colloquio e Local Storage

Selezionando **Sì** compare la textarea e il pulsante **Salva**. Il pulsante memorizza il testo con la chiave `motivazioneColloquio` nel Local Storage, stampa Key e Value nella Console e mostra un `alert`.

Per verificare il salvataggio in Chrome/Edge:
1. Apri gli strumenti sviluppatore (`F12`).
2. Vai in **Application** → **Local Storage** → indirizzo della web app.
3. Cerca la chiave `motivazioneColloquio` e controlla il relativo valore.
4. In **Console** trovi anche le righe `Key:` e `Value:`.

Il testo salvato viene ricaricato automaticamente quando riapri la dashboard. Se selezioni **No**, la textarea non viene mostrata.
