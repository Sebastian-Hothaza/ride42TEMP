console.log("Hello from JS!")

main();

async function main() {
    try {
        const response = await fetch('https://api.ride42.ca/presentTrackdays');
        if (!response.ok) throw new Error("Failed to get API Data")
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err.message)
    }
}