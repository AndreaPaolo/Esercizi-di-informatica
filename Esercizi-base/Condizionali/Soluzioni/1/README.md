# Condizioni 1:

**Quesito:** Controlla se il numero inserito è maggiore di 5

## Diagramma di flusso

```mermaid
flowchart TD
start([start]) --> valori[/Leggi n/]
valori --> a{n>5}
a --> b[Maggiore di 5] --> stop
a --> c[Minore di 5] --> stop
stop([stop])
```

## Pseudo-codifica

```
INIZIO.

Leggi n;
Se n>5
    Stampa Maggiore di 5;
Altrimenti
    Stampa Minore di 5;
fine-se

FINE.
```

Usiamo come valori 10 e 4
||Risultato|
|-|-|
|10|`Maggiore`|
|5|`Minore`|
