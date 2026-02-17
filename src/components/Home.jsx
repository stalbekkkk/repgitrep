import React, { useMemo, useState } from "react";
import styles from "./Home.module.css";

const promoData = [
  {
    id: 1,
    percent: 15,
    title: "Greys Vage",
    daysLeft: 6,
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    percent: 10,
    title: "Greys Vage",
    daysLeft: 6,
    image:
      "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f5d2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    percent: 25,
    title: "Grey’s Vage",
    daysLeft: 7,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    percent: 20,
    title: "Greys Vage",
    daysLeft: 8,
    image:
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  const [mode, setMode] = useState("delivery"); // delivery | pickup
  const [address, setAddress] = useState("");

  const locationText = useMemo(
    () => "Current Location Mohammadpur Bus Stand, Dhaka",
    []
  );

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: hook to your search route / API
    console.log({ mode, address });
  };

  return (
    <div className={styles.page}>
      {/* Top bar */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="/">
            <span className={styles.brandMark} aria-hidden="true">🍔</span>
            <span className={styles.brandText}>foodwagon</span>
          </a>

          <div className={styles.deliverTo}>
            <span className={styles.deliverLabel}>Deliver to:</span>
            <span className={styles.deliverValue}>
              <span className={styles.pin} aria-hidden="true">📍</span>
              {locationText}
            </span>
          </div>

          <div className={styles.headerRight}>
            <button className={styles.searchBtn} type="button" aria-label="Search">
              <span className={styles.searchIcon} aria-hidden="true">🔍</span>
              <span className={styles.searchText}>Search Food</span>
            </button>

            <button className={styles.loginBtn} type="button">
              <span className={styles.userIcon} aria-hidden="true">👤</span>
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>Are you starving?</h1>
            <p className={styles.heroSubtitle}>
              Within a few clicks, find meals that are accessible near you
            </p>

            <form className={styles.searchCard} onSubmit={onSubmit}>
              <div className={styles.tabs}>
                <button
                  type="button"
                  className={`${styles.tab} ${mode === "delivery" ? styles.tabActive : ""}`}
                  onClick={() => setMode("delivery")}
                >
                  <span className={styles.tabIcon} aria-hidden="true">🚚</span>
                  Delivery
                </button>
                <button
                  type="button"
                  className={`${styles.tab} ${mode === "pickup" ? styles.tabActive : ""}`}
                  onClick={() => setMode("pickup")}
                >
                  <span className={styles.tabIcon} aria-hidden="true">🛍️</span>
                  Pickup
                </button>
              </div>

              <div className={styles.searchRow}>
                <div className={styles.inputWrap}>
                  <span className={styles.inputIcon} aria-hidden="true">📍</span>
                  <input
                    className={styles.input}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Your Address"
                    aria-label="Enter your address"
                  />
                </div>

                <button className={styles.findBtn} type="submit">
                  <span className={styles.findIcon} aria-hidden="true">🔎</span>
                  Find Food
                </button>
              </div>
            </form>
          </div>

          <div className={styles.heroRight} aria-hidden="true">
            <div className={styles.heroDish}>
              <img
                src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promo cards */}
      <section className={styles.promos}>
        <div className={styles.promosInner}>
          <div className={styles.promoGrid}>
            {promoData.map((p) => (
              <article className={styles.promoCard} key={p.id}>
                <div className={styles.promoImageWrap}>
                  <img className={styles.promoImage} src={p.image} alt={p.title} />
                  <div className={styles.badge}>
                    <div className={styles.badgeTop}>
                      <span className={styles.badgePercent}>{p.percent}%</span>
                      <span className={styles.badgeOff}>Off</span>
                    </div>
                  </div>
                </div>

                <div className={styles.promoMeta}>
                  <div className={styles.promoTitle}>{p.title}</div>
                  <div className={styles.promoPill}>{p.daysLeft} Days Remaining</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
