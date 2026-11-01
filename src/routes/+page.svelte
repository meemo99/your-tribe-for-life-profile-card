<script>
    let { data } = $props();
    const member = $derived(data.member);
    import MemberCard from "$lib/components/MemberCard.svelte";
    import FavsCard from "$lib/components/FavsCard.svelte";

    let showFavs = $state(false);
    let swingKey = $state(0);

    function toggleFavs() {
        console.log("clicked!", showFavs);
        showFavs = !showFavs;
    }
</script>

<section>
    {#if showFavs}
        <FavsCard {member} />
    {/if}

    <MemberCard {member} onclick={toggleFavs} />
</section>

<style>
    :global(body) {
        background: radial-gradient(
            circle,
            #f5e6a8 0%,
            #f5d0dc 50%,
            #faf6e9 100%
        );
        min-height: 100vh;
        align-content: center;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        position: relative;
    }
</style>
