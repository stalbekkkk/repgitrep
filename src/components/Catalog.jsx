import React from "react";
import styles from "./Catalog.module.css";

const data = [
  {
    id: 1,
    name: "Foodworld",
    rating: 46,
    discount: 20,
    fast: true,
    status: "Opens tomorrow",
    statusType: "warn",
    logoText: "F",
    image:
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    name: "Pizzahub",
    rating: 40,
    discount: 15,
    fast: true,
    status: "Opens tomorrow",
    statusType: "warn",
    logoText: "P",
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    name: "Donuts hut",
    rating: 20,
    discount: 10,
    fast: true,
    status: "Open Now",
    statusType: "ok",
    logoText: "D",
    image:
      "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 4,
    name: "Donuts hut",
    rating: 50,
    discount: 15,
    fast: true,
    status: "Open Now",
    statusType: "ok",
    logoText: "D",
    image:
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 5,
    name: "Ruby Tuesday",
    rating: 26,
    discount: 10,
    fast: true,
    status: "Open Now",
    statusType: "ok",
    logoText: "R",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 6,
    name: "Kuakata Fried Chicken",
    rating: 53,
    discount: 25,
    fast: true,
    status: "Open Now",
    statusType: "ok",
    logoText: "K",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 7,
    name: "Red Square",
    rating: 45,
    discount: 10,
    fast: true,
    status: "Open Now",
    statusType: "ok",
    logoText: "R",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 8,
    name: "Taco Bell",
    rating: 35,
    discount: 10,
    fast: true,
    status: "Open Now",
    statusType: "ok",
    logoText: "T",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=80",
  },
];

function StatusPill({ type, children }) {
  const cls = type === "ok" ? styles.statusOk : styles.statusWarn;
  return <div className={`${styles.status} ${cls}`}>{children}</div>;
}

export default function Catalog() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Restaurants</h2>

        <div className={styles.grid}>
          {data.map((r) => (
            <article key={r.id} className={styles.card}>
              <div className={styles.media}>
                <img className={styles.image} src={r.image} alt={r.name} />

                <div className={styles.badges}>
                  <span className={styles.badgeDiscount}>
                    <span className={styles.badgeIcon} aria-hidden="true">
                      🏷️
                    </span>
                    {r.discount}% off
                  </span>

                  {r.fast ? (
                    <span className={styles.badgeFast}>
                      <span className={styles.badgeIcon} aria-hidden="true">
                        ⚡
                      </span>
                      Fast
                    </span>
                  ) : null}
                </div>
              </div>

              <div className={styles.body}>
                <div className={styles.row}>
                  <div className={styles.logo} aria-hidden="true">
                    {r.logoText}
                  </div>

                  <div className={styles.info}>
                    <div className={styles.name}>{r.name}</div>
                    <div className={styles.rating}>
                      <span className={styles.star} aria-hidden="true">
                        ★
                      </span>
                      {r.rating}
                    </div>
                  </div>
                </div>

                <StatusPill type={r.statusType}>{r.status}</StatusPill>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.viewAll} type="button">
            View All <span className={styles.arrow} aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}