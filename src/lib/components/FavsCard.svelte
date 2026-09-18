<script>
    import { fly } from "svelte/transition";
    import pixelHeart from "$lib/assets/pixelHeart.png";
    import star from "$lib/assets/star.png";
    let { member, onclick } = $props();
</script>

<section transition:fly={{ x: 50, duration: 400 }}>
    <img class="heart" src={pixelHeart} alt="" width="20%" />
    <img class="star" src={star} alt="" width="20%" />
    <h2>Favourites</h2>
    <ul>
        <li>
            <h3>Fav Game</h3>
            <p>{member.fav_game}</p>
        </li>
        <li>
            <h3>Fav Fruit</h3>
            <p>{member.fav_fruit}</p>
        </li>
        <li>
            <h3>Fav Hobby</h3>
            <p>{member.fav_hobby}</p>
        </li>
        <li>
            <h3>Fav Emoji</h3>
            <p>{member.fav_emoji}</p>
        </li>
        <li>
            <h3>Fav Movie</h3>
            <p>{member.fav_movie}</p>
        </li>
        <li>
            <h3>Fav Season</h3>
            <p>{member.fav_season}</p>
        </li>
        <li>
            <h3>Fav Colour</h3>
            <p>{member.fav_color}</p>
        </li>
        <li>
            <h3>Fav Tag</h3>
            <p>{member.fav_tag}</p>
        </li>
        <li>
            <h3>Fav Propery</h3>
            <p>{member.fav_property}</p>
        </li>
    </ul>
</section>

<style>
    h2,
    h3 {
        color: #4c5a45;
    }
    h2 {
        background-color: #c8d8c0;
        border-radius: 25px;
        width: fit-content;
        padding: 8px;
        text-align: center;
        margin: 10px auto;
    }

    section {
        background-color: #fffbeb;
        border: solid 15px #c8d8c0;
        height: fit-content;
        position: absolute;
        top: 20px;
        right: 140px;
        padding: 30px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

        &:hover {
            z-index: 4;
        }
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        list-style: none;
        margin: 0;
        padding: 0;
        background-color: #fffbeb;
        border: 1.3px solid #8a8a6d;
        border-radius: 25px;
        overflow: hidden;
    }
    li {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px 10px;
        border: 0.5px solid #8a8a6d;
        border-left: none;
        border-bottom: none;
    }

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        min-width: 100px;
        padding: 6px 16px;
        background-color: #c3d6bd;
        border-radius: 20px;
        font-size: 0.85rem;
        white-space: nowrap;
    }

    img {
        position: absolute;
        top: 10px;
        right: -15px;
        transform: rotate(-15deg);
        filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.2));
    }

    .star {
        top: 10px;
        right: -10px;
        transform: rotate(-15deg);
    }
    .heart {
        bottom: 20px;
        left: -10px;
        transform: rotate(12deg);
    }
</style>
