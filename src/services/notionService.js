// Importing notion client from the utils.
const notion = require("../client/notionClient");

// Querying the database "Images"
module.exports =  async function getImages() {

    const database_id =  process.env.NOTION_DATABASE_ID;

    const payload = {
        path: `databases/${database_id}/query`,
        method: "POST"
    }

    // const { results } = await notion.databases.query({database_id: database_id});
    const { results } = await notion.request(payload);

    const images = results.map((page) => {
        return {
            EVENT_TYPE: page?.properties?.EVENT_TYPE?.select?.name,
            APP_CATEGORY: page?.properties?.APP_CATEGORY?.select?.name,
            ORIENTATION: page?.properties?.ORIENTATION?.select?.name,
            IMAGE_LINK: page?.properties?.IMAGE_LINK?.url,
        }
    })

    return images;
};
