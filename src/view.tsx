import styles from "/styles.module.css";

import onSpin from "/actions/onSpin";

import {} from "/utils";

export default (state) => (
    <div class={styles.app}>
        <div class={styles.title}>RECIPE ROULETTE</div>
        <div class={styles.spin} onclick={onSpin}>
            SPIN THE WHEEL <span class={styles.meme}>(of cheese)</span>
        </div>
        {state.recipe ? (
            <div class={styles.recipe}>
                <div class={styles.name}>{state.recipe[0]}</div>
                <div class={styles.ingredientsHeading}>Ingredients</div>
                <ul class={styles.ingredients}>
                    {state.recipe.slice(2).map((line) => (
                        <li>{line}</li>
                    ))}
                </ul>
            </div>
        ) : (
            <div class={styles.splash}>
                <div>Not sure what to have for dinner?</div>
                {/* <div>Too scared to spice in up in the bedroom and want to get some practice in the kitchen?</div> */}
                <div>Give the Recipe Roulette Wheel™©® a spin and let fate decide your digestive destination.</div>
            </div>
        )}
    </div>
);
