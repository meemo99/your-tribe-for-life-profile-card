<script>
    let { member, onclick } = $props();
    import githubLogo from "$lib/assets/githubLogo.svg";
    import lanyard from "$lib/assets/lanyard.png";

    import foto from "$lib/assets/foto.png";
    import comicMark from "$lib/assets/comicMark.png";

    import button from "$lib/assets/button.png";
    const firstName = $derived(member.name.split(" ")[0]);
</script>

<img class="lanyard" src={lanyard} alt="" />
<section {onclick}>
    <span></span>
    <h1>Student FDND</h1>
    <img class="sticker button" src={button} alt="" width="20%" />
    <img class="sticker comic" src={comicMark} alt="" width="30%" />
    <img class="mugshots" src={foto} alt="" width="250" height="300" />

    <article>
        <h2>{firstName}</h2>
        <h2>{member.birthdate}</h2>
    </article>

    <a href="https://github.com/{member.github_handle}">
        <img src={githubLogo} alt="" width="40px" height="40px" /></a
    >
</section>

<style>
    h1,
    h2 {
        color: #4a1f2b;
    }
    .lanyard {
        z-index: 3;
        margin-top: -190px;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ea9caf;
        width: 370px;
        height: 540px;
        border-radius: 12px;
        z-index: 2;
        transform-origin: top center;
        animation: pendulum-swing 2.5s ease-out;
        box-shadow:
            0 2px 4px rgba(0, 0, 0, 0.1),
            0 8px 16px rgba(0, 0, 0, 0.12),
            0 16px 32px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        margin-top: -60px;
        position: relative;
        transform: rotate(-2deg);
    }
    span {
        background-color: #edcfdb;
        width: 120px;
        height: 24px;
        border-radius: 15px;
        margin: 10px;
        box-shadow: inset -3px -3px 3px 0px #0000008e;
    }
    img {
        object-fit: cover;
        border-radius: 5%;
    }
    article {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 10px;
    }

    .sticker {
        position: absolute;
        top: 10px;
        right: -15px;
        transform: rotate(-15deg);
        filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.2));
    }
    .comic {
        top: 340px;
        right: 10px;
        transform: rotate(50deg);
    }

    .button {
        top: 20px;
        left: 20px;
        transform: rotate(12deg);
    }

    @keyframes pendulum-swing {
        0% {
            transform: rotate(-2deg);
        }
        10% {
            transform: rotate(6deg);
        }
        25% {
            transform: rotate(-8deg);
        }
        40% {
            transform: rotate(2deg);
        }
        55% {
            transform: rotate(-4.5deg);
        }
        70% {
            transform: rotate(-0.5deg);
        }
        85% {
            transform: rotate(-2.5deg);
        }
        100% {
            transform: rotate(-2deg);
        }
    }
</style>
