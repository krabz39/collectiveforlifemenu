const world = Globe()

(document.getElementById("globeViz"))

.globeImageUrl(
'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
)

.bumpImageUrl(
'https://unpkg.com/three-globe/example/img/earth-topology.png'
)

.backgroundColor('rgba(0,0,0,0)')

.atmosphereColor('#2563eb')

.atmosphereAltitude(0.18);

fetch('https://unpkg.com/world-atlas/countries-110m.json')

.then(res => res.json())

.then(countries => {

const countryFeatures = topojson.feature(
countries,
countries.objects.countries
).features;

world

.polygonsData(countryFeatures)

.polygonCapColor(() => 'rgba(37,99,235,0.08)')

.polygonSideColor(() => 'rgba(0, 100, 255, 0.03)')

.polygonStrokeColor(() => '#2563eb')

.polygonAltitude(0.01)

.polygonLabel(({ properties: d }) => `
<div style="
background:white;
padding:10px 16px;
border-radius:12px;
font-family:Inter;
color:#0f172a;
font-size:14px;
box-shadow:0 10px 30px rgba(0,0,0,0.1);
">
${d.name}
</div>
`)

.onPolygonHover(hoverD =>
world
.polygonAltitude(d => d === hoverD ? 0.04 : 0.01)
);

});

world.controls().autoRotate = true;

world.controls().autoRotateSpeed = 0.6;

world.controls().enableZoom = true;
window.addEventListener('resize', () => {

    world.width(
        document.getElementById('globeViz').offsetWidth
    );

    world.height(
        document.getElementById('globeViz').offsetHeight
    );

});
