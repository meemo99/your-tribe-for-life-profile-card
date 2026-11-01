export async function load() {
    const memberId = 248;
    const memberResponse = await fetch(`https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[id][_eq]=${memberId}`);
    const memberData = await memberResponse.json();

    return { member: memberData.data[0] };
}