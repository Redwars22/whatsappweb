export async function fetchData(){
    const data = await fetch("https://react-whatsappweb.vercel.app/whatsapp.json");
    const res = await data.text();

    return JSON.parse(res);
}