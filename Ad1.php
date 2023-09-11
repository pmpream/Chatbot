<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Dashboard แนะทางนิสิตใหม่</title>
        <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

    <!-- Custom styles for this page -->
    <link href="vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">

		<style type="text/css">
.highcharts-figure,
.highcharts-data-table table {
    min-width: 360px;
    max-width: 800px;
    margin: 1em auto;
}

.highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
}

.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}

.highcharts-data-table th {
    font-weight: 600;
    padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
    padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}

.highcharts-data-table tr:hover {
    background: #f1f7ff;
}

	</style>
	</head>
	<body>
    <style>
    body {
      /* กำหนดพื้นหลังด้วยภาพ */
      background-image: url('2.jpg');
      /* กำหนดสไตล์การแสดงผลของพื้นหลัง */
      background-repeat: no-repeat; /* ไม่ซ้ำภาพ */
      background-size: cover; /* ปรับขนาดภาพให้เต็มพื้นที่หน้าจอ */
    }
    
  </style>    


<script src="webchat/highcharts.js"></script>
<script src="webchat/modules/series-label.js"></script>
<script src="webchat/modules/exporting.js"></script>
<script src="webchat/modules/export-data.js"></script>
<script src="webchat/modules/accessibility.js"></script>

<figure class="highcharts-figure">
    <div id="container"></div>
    <p class="highcharts-description">
        กราฟแสดงจำนวนข้อมูล INTENT ของนิสิตที่ใช้ถาม-ตอบ CHATBOT จากกราฟจจะแสดงจำนวนจากมากไปน้อยของข้อมูล
        <code></code> 
    </p>
</figure>


<?php
//เชื่อมต่อฐานข้อมูล
$conn=mysqli_connect("localhost","root","","db_chat");   
//ให้แสดงผลภาษาไทยได้ โดยกำหนด charset เป็น utf-8
mysqli_set_charset($conn,"utf8");

$sql = "SELECT intent,COUNT(*) AS intent1 
FROM conversation_history 
GROUP BY intent  
ORDER BY intent1 DESC
LIMIT 10";
$result = mysqli_query($conn,$sql);

    $proName = array();
    $proNum = array();
    while($row=mysqli_fetch_assoc($result)) {
        $proName[] = $row['intent'];
        $proNum[] =$row['intent1'];
    }
?>



		<script type="text/javascript">
Highcharts.chart('container', {

    chart: {
        type: 'column',
        align: 'left'
    },
    title: {
        text: 'รายงานจำนวนการตอบ-ถาม CHATBOT',
        align: 'left'
    },

    subtitle: {
        text: 'รายงานที่มีการจำนวนการตอบกลับ',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'จำนวน INTENT ที่มีการตอบกลับ'
        }
    },

    xAxis: {
        categories: [<?php echo "'" . implode("','", $proName) . "'"; ?>]
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

   

    series: [{
        name: 'INTENT',
        data: [<?php echo implode(",",$proNum); ?>]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

		</script>
	</body>
</html>
