# Leistungsfeststellung: React & TypeScript (Grundlagen)

**Name:** ___________________________ &emsp; **Datum:** _______________ &emsp; **Punkte:** _____ / 24

---

## Aufgabe 1: TypeScript-Interfaces, Props & optionale Parameter (6 Punkte)
Betrachte folgende React-Komponente `UserBadge`:

```tsx
interface UserBadgeProps {
  username: string;
  role?: string;
  isOnline: boolean;
}

export function UserBadge({ username, role = "Member", isOnline }: UserBadgeProps) {
  return (
    <div className="badge">
      <h3>{username}</h3>
      <span>Role: {role}</span>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
```

**Fragen:**
1. Woran erkennt man im TypeScript-Code, dass `role` ein **optionales Property** ist? *(1 Punkt)*
2. Was passiert beim Rendern von `<UserBadge username="Alex" isOnline={true} />`, wenn `role` nicht übergeben wird, und warum? *(2 Punkte)*
3. Warum meldet TypeScript beim Aufruf `<UserBadge username="Alex" />` einen Compiler-Fehler? *(1 Punkt)*
4. Wie müsste der Aufruf korrekt aussehen, wenn `"Alex"` die Rolle `"Admin"` hat und offline ist? *(2 Punkte)*

---

## Aufgabe 2: State-Management mit `useState` & TypeScript (6 Punkte)
Analysiere die folgende `LikeButton`-Komponente:

```tsx
import { useState } from "react";

interface LikeButtonProps {
  initialLikes?: number;
}

export function LikeButton({ initialLikes = 0 }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleToggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <button onClick={handleToggleLike}>
      {isLiked ? "Unlike" : "Like"} ({likes})
    </button>
  );
}
```

**Fragen:**
1. Erkläre die beiden Rückgabewerte `likes` und `setLikes` von `useState<number>(initialLikes)`. *(2 Punkte)*
2. Warum darf man den State in React nicht direkt per `likes = likes + 1` verändern, sondern muss `setLikes(...)` verwenden? *(2 Punkte)*
3. Wofür steht `<number>` bzw. `<boolean>` beim Aufruf von `useState`? Wann wäre eine explizite Typangabe wie `useState<string | null>(null)` zwingend notwendig? *(2 Punkte)*

---

## Aufgabe 3: Verschachtelte Komponenten & Datenfluss (6 Punkte)
Ein Entwickler baut eine Produktübersicht aus zwei Komponenten (`ProductCard` und `ProductList`):

```tsx
interface ProductCardProps {
  title: string;
  price: number;
  discountPercent?: number;
}

function ProductCard({ title, price, discountPercent }: ProductCardProps) {
  const finalPrice = discountPercent
    ? price - (price * discountPercent) / 100
    : price;

  return (
    <div className="card">
      <h4>{title}</h4>
      <p>Price: {finalPrice} EUR</p>
    </div>
  );
}

export function ProductList() {
  return (
    <section>
      <ProductCard title="Mechanical Keyboard" price={120} discountPercent={10} />
      <ProductCard title="USB-C Cable" price={15} />
    </section>
  );
}
```

**Fragen:**
1. Welche Komponente ist hier die **Elternkomponente (Parent)** und welche die **Kindkomponente (Child)**? Wie werden Daten zwischen ihnen weitergegeben? *(2 Punkte)*
2. Welcher Preis wird für `"Mechanical Keyboard"` und welcher für `"USB-C Cable"` im Browser angezeigt? *(2 Punkte)*
3. Warum ist `ProductCard` nicht mit `export` versehen, `ProductList` aber schon? *(2 Punkte)*

---

## Aufgabe 4: Praxisaufgabe – Eigene Komponente schreiben (6 Punkte)
Schreibe eine vollständige React-Komponente `TaskItem` in TypeScript (`tsx`), die folgende Anforderungen erfüllt:

1. Definiere ein TypeScript-Interface `TaskItemProps` mit:
   * `title` (Pflichtfeld, Text)
   * `priority` (optional, Text, Standardwert soll `"Normal"` sein)
2. Verwende `useState`, um zu speichern, ob die Aufgabe erledigt ist (`isDone`, Startwert `false`).
3. Die Komponente soll ein `<div>` rendern, das:
   * den `title` und die `priority` anzeigt,
   * einen `<button>` enthält, der beim Klicken (`onClick`) den Zustand `isDone` zwischen `true` und `false` umschaltet,
   * auf dem Button `"Undo"` anzeigt, wenn `isDone` wahr ist, und `"Complete"`, wenn `isDone` falsch ist.

---
---

