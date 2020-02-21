<template>
  <div class="rounded overflow-hidden shadow-lg">
    <canvas :width="this.width" :height="this.height" class="h-48" ref="canvas" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{town.name}}</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">2D</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">3D</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Printer</span>
    </div>
  </div>
</template>

<script>

import {sortBy, head, last, each} from 'lodash';

export default {
  props: {
      town: Object,
      width: {
        type: Number,
        default: 500
      },
      height: {
        type: Number,
        default: 500
      }
  },
  mounted() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext('2d');

    const onePercentLatPixel = this.width / 100;
    const onePercentLonPixel = this.height / 100;

    let sortLat = sortBy(this.town.borders_lq, ['lat']);
    let sortLon = sortBy(this.town.borders_lq, ['lon']);

    let lowestLat = head(sortLat)['lat'];
    let lowestLon = head(sortLon)['lon'];

    let onePercentLat = 100 / (last(sortLat)['lat'] - lowestLat);
    let onePercentLon = 100 / (last(sortLon)['lon'] - lowestLon);

    ctx.beginPath();

    each(this.town.borders_lq, (geo, index) => {

// I might have to rotate this
      let percentLat = 100 - ((geo.lat - lowestLat) * onePercentLat);
      let percentLon = 100 - ((geo.lon - lowestLon) * onePercentLon);

      let x = onePercentLonPixel * percentLon;
      let y = this.height - (onePercentLatPixel * percentLat);

      if (index == 0) {
        ctx.moveTo(x, y);
      }
      else {
        ctx.lineTo(x, y);
      }

    });

    ctx.closePath();
    ctx.stroke();

  }
}
</script>