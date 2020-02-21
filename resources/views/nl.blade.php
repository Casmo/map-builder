<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>NL</title>

    </head>
    <body>

    <canvas id="map" width="1024" height="1024"></canvas>

    <script>
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
        const canvas = document.getElementById('map');
        const ctx = canvas.getContext('2d');
    <?php


    $highestLat = 53.57642327;
    $lowestLat = 50.75184963;
    $highestLon = 7.21567198;
    $lowestLon = 3.36234043;

    $onePercentLatPixel = 1024 / 100;
    $onePercentLonPixel = 1024 / 100;

    $onePercentLat = 100 / ($highestLat - $lowestLat);
    $onePercentLon = 100 / ($highestLon - $lowestLon);

    foreach ($towns as $indexTown => $town) {

        $output = 'var '. $town->slug .' = '. $town->slug .' ||  {
            
            name: "'. $town->name .'",

            position: {
                x: 0,
                y: 0
            },

            size: {
                width: 512,
                height: 512
            },

            init(x, y, width, height) {
                this.position.x = x;
                this.position.y = y;
                this.size.width = width;
                this.size.height = height;
            },
            
            vector: [
        ';

        $parts = preg_match_all('/([0-9\.]+)([[:space:]])([0-9\.]+)([[:space:]])?/', $town->borders_lq, $matches);

        $firstX = 0;
        $firstY = 0;


        $highestLat = 1.57642327;
        $lowestLat = 99.75184963;
        $highestLon = 1.21567198;
        $lowestLon = 99.36234043;

        foreach ($matches[1] as $key => $lat) {
            $lon = $matches[3][$key];

            if ($lat > $highestLat) {
                $highestLat = $lat;
            }
            if ($lon > $highestLon) {
                $highestLon = $lon;
            }
            if ($lat < $lowestLat) {
                $lowestLat = $lat;
            }
            if ($lon < $lowestLon) {
                $lowestLon = $lon;
            }
        }

        foreach ($matches[1] as $key => $lat) {
            $lon = $matches[3][$key];

            $percentLat = 100 - (($lat - $lowestLat) * $onePercentLat);
            $percentLon = ($lon - $lowestLon) * $onePercentLon;

            $output .= '{
                x: '. $percentLon .',
                y: '. $percentLat .'
            },';
            continue;

            $y = 1024 - (round($onePercentLatPixel * $percentLat));
            $x = round($onePercentLonPixel * $percentLon);
            if ($key == 0) {
                $firstX = $x;
                $firstY = $y;

                if ($indexTown > 0) {
                    echo 'ctx.closePath();';
                    echo 'ctx.stroke();';

                    echo 'ctx.fillStyle = getRandomColor();';
                    echo 'ctx.fill();';

                    echo 'ctx.font = "12px Arial";';
                    echo 'ctx.fillText("'. htmlspecialchars($town->name) .'", '. $x .', ' . $y . ');';
                }
            
                echo 'ctx.beginPath();';
                echo 'ctx.moveTo('. $x .', ' . $y . ');';
            }
            echo 'ctx.lineTo('. $x .', ' . $y . ');';


        }

        $output .= '
    ], renderCanvas() {
            ctx.beginPath();
            for (let i = 0; i < this.vector.lenght; i++) {
                let vector = this.vector[i];

                $x = this.position.x + (this.size.width / 100 * vector.x);
                $x = this.position.y + (this.size.height / 100 * vector.y);
            }
            ctx.closePath();
            ctx.stroke();
        }';

        $output .= '
};';
        file_put_contents(resource_path('js/towns/'. $town->slug .'.js'), $output);
    }
        ?>
        </script>

    </body>
</html>
