import * as d3 from 'd3';
import 'spectre.css/dist/spectre.css';
import './scss/index.scss';
const h = 360
const w = 480
const barWidth = 40
const barOffset = 20

const svg = d3.select('#chart')
    .append('svg')
    .attr('height', h)
    .attr('width', w)
    .append('g')
    .attr('transform', 'translate(0,0)')

d3.queue()
    .defer(d3.csv, './data.csv')
    .await(ready)

function ready (error, datapoints) {
    console.log(JSON.stringify(error))
    const circles = svg.selectAll('.artist')
        // .data(datapoints)
        // .enter().append('circle')
        // .attr('class', 'artist')
        // .attr('r', 10)
        // .attr('fill', 'lightblue')
}

module.hot && module.hot.accept()
