import * as d3 from 'd3';
import '~/scss/index.scss';
const chartdata = [40, 60, 80, 100, 70, 120, 100, 60, 70, 150, 120, 140]
const h = 360
const w = 480
const barWidth = 40
const barOffset = 20
const svg = d3.select("#coordinate")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style('background', '#dff0d8')
    .selectAll('react').data(chartdata)
    .enter().append('rect')
    .attr('width', barWidth)
    .attr('height', function (data) {
        return data;
    })
    .attr('x', function (data, i) {
        return i * (barWidth + barOffset);
    })
    .attr('y', function (data) {
        return h - data;
    })
    .style({'fill': '#3c763d', 'stroke': '#d6e9c6', 'stroke-width': '5'})
