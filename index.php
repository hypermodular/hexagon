<?php

    $height = 10;
    $width = 10;
    $edgeLength = 10;
    $viewBox = '';
    $centerY = $height / 2 + $edgeLength / 2;
    $marginX = round( $height / 2  );

    $gorny_lewy = ['x'=> $marginX, 'y'=> $centerY - $height / 2]; // górny lewy
    $gorny_prawy = ['x'=> $marginX + $edgeLength, 'y'=> $centerY - $height / 2]; // górny prawy
    $dolny_prawy = ['x'=> $marginX + $edgeLength, 'y'=> $centerY + $height / 2]; // dolny prawy
    $dolny_lewy = ['x'=> $marginX, 'y'=> $centerY + $height / 2]; // dolny lewy
    $lewy = ['x'=> $marginX - $edgeLength / 2, 'y'=> $centerY]; // lewy górny wierzchołek
    $prawy = ['x'=> $marginX + $edgeLength * 1.5, 'y'=> $centerY]; // prawy górny wierzchołek
    $center = ['x'=> $marginX + $edgeLength / 2, 'y'=> $centerY]; // górny prawy

    $borderColor = "white";
    $fontColor = "white";
    $fontSize = round($edgeLength / 5);
    $fontSizeMarginX = round($edgeLength / 10);
    $fontSizeMarginY = round($edgeLength / 20);

    $leftCenter = ['x'=> $lewy['x'] + $fontSizeMarginX, 'y'=> $centerY + $fontSizeMarginY];
    $rightCenter = ['x'=> $prawy['x'] - $fontSizeMarginX, 'y'=> $centerY + $fontSizeMarginY];
    $topLeftCenter = ['x'=> $center['x'], 'y'=> $gorny_lewy['y'] + $fontSize];
    $bottomLeftCenter = ['x'=> $center['x'] , 'y'=> $dolny_lewy['y'] - $fontSizeMarginY];

    $margin = 3;


    function getPointsByWidth($edgeLength, $marginX, $centerY){
        return 1;
    }
    function getHexagonByPoints($points=[]){
        return implode(',' , [1]);
    }
    function getCrossByEdge($edgeLength, $marginX, $centerY){
        return [['x'=>10, 'y'=>10]];
    }
    function getDataByEdge($edgeLength, $margin, $marginX, $centerY){
        return [];
    }
    function getLogicByEdge($edgeLength, $margin, $marginX, $centerY){
        return [];
    }
    function getTriangleByPoints($points=[]){
        return [];
    }
    function getDiamondByPoints($points=[]){
        return 1;
    }
    function getInDiamondByEdge($edgeLength, $margin, $marginX, $centerY){
        return 1;
    }
    function getOutDiamondByEdge($edgeLength, $margin, $marginX, $centerY){
        return 1;
    }

    $hexagonPoints = getHexagonByPoints( getPointsByWidth($edgeLength, $marginX, $centerY) );
    $crossPoints = getCrossByEdge( $edgeLength, $marginX, $centerY);
    $dataPoints = getTriangleByPoints( getDataByEdge($edgeLength, $margin, $marginX, $centerY));
    $logicPoints = getTriangleByPoints( getLogicByEdge($edgeLength, $margin, $marginX, $centerY));

    $inPoints = getDiamondByPoints(getInDiamondByEdge($edgeLength, $margin, $marginX, $centerY));
    $outPoints = getDiamondByPoints(getOutDiamondByEdge($edgeLength, $margin, $marginX, $centerY));

    TODO: skrypt generujacy plik sv jak w nodejs na bazie json
    TODO: convert z svg to png
?>

<svg width="<?= $width ?>px" $height="<?= $height + $edgeLength ?>px" viewBox="<?= $viewBox ?>" xmlns="http://www.w3.org/2000/svg">
    <polygon points="<?= $hexagonPoints ?>" fill="none" stroke="<?= $borderColor ?>" />

        <!-- Linie przekątnych -->
        <line x1="<?= $crossPoints[0]['x'] ?>" y1="<?= $crossPoints[0]['y'] ?>" x2="<?= $crossPoints[1]['x'] ?>" y2="<?= $crossPoints[1]['y'] ?>" stroke="<?= $borderColor ?>" />
        <line x1="<?= $crossPoints[2]['x'] ?>" y1="<?= $crossPoints[2]['y'] ?>" x2="<?= $crossPoints[3]['x'] ?>" y2="<?= $crossPoints[3]['y'] ?>" stroke="<?= $borderColor ?>" />

        <!-- Górny zielony trójkąt -->
        <polygon points="<?= $dataPoints ?>" fill="blue" />
        <text x="<?= $topLeftCenter['x'] ?>" y="<?= $topLeftCenter['y'] ?>" font-size="<?= $fontSize ?>" fill="<?= $fontColor ?>" text-anchor="middle">DANE</text>

        <!-- Dolny niebieski trójkąt -->
        <polygon points="<?= $logicPoints ?>" fill="green" />
        <text x="<?= $bottomLeftCenter['x'] ?>" y="<?= $bottomLeftCenter['y'] ?>" font-size="<?= $fontSize ?>" fill="<?= $fontColor ?>" text-anchor="middle">LOGIKA</text>



        <!-- Lewy żółty romb  -->
        <polygon points="<?= $inPoints ?>" fill="pink" />
         <text x="<?= $leftCenter['x'] ?>" y="<?= $leftCenter['y'] ?>" font-size="<?= $fontSize ?>" fill="<?= $fontColor ?>">wejście</text>

        <!-- Prawy pomarańczowy romb -->
        <polygon points="<?= $outPoints ?>" fill="orange" />
        <text x="<?= $rightCenter['x'] ?>" y="<?= $rightCenter['y'] ?>" font-size="<?= $fontSize ?>" fill="<?= $fontColor ?>" text-anchor="end">wyjście</text>


</svg>
