export async function fetchData(){
    const data = await fetch("https://react-whatsappweb.vercel.app/whatsapp.json");
    const res = await data.text();

    console.log(JSON.parse(res))

    return JSON.parse(res);
}