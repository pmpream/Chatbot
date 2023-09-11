const { connectToDatabase } = require('./database');

async function addConversationHistory(connection, intent, text) {
  try {
    const datetime = new Date();
    console.log(
      result.datetime,
      result.message,
      '=>',
      'Intent:',
      intent,
      'Text:',
    );

    let data = {};
    if (
      intent === 'building1'  || intent === 'building2'  ||
      intent === 'building3'  || intent === 'building4'  ||
      intent === 'building5'  || intent === 'building6'  ||
      intent === 'building7'  || intent === 'building8'  ||
      intent === 'building9'  || intent === 'building10' ||
      intent === 'building11' || intent === 'building12' ||
      intent === 'building13' || intent === 'building14' ||
      intent === 'building15' || intent === 'building16' ||
      intent === 'building17' || intent === 'building18' ||
      intent === 'building19' || intent === 'building20' ||
      intent === 'building21' || intent === 'building22' 
      ) {
      data = await getDataFromName(connection); //ชื่ออาคาร
    } else if (
      intent === 'number1' || intent === 'number2' ||
      intent === 'number3' || intent === 'number4' ||
      intent === 'number5' || intent === 'number6' ||
      intent === 'number7' || intent === 'number8' ||
      intent === 'number9' || intent === 'number10' ||
      intent === 'number11' || intent === 'number12' ||
      intent === 'number13' || intent === 'number14' ||
      intent === 'number15' || intent === 'number16' ||
      intent === 'number17' || intent === 'number18' ||
      intent === 'number19' || intent === 'number20' ||
      intent === 'number21' || intent === 'number22' 
      ) {
      data = await getDataFromBuilding(connection); //หมายเลขอาคาร
    } else if (
      intent === 'location1'  || intent === 'location2'  ||
      intent === 'location3'  || intent === 'location4'  ||
      intent === 'location5'  || intent === 'location6'  ||
      intent === 'location7'  || intent === 'location8'  ||
      intent === 'location9'  || intent === 'location10' ||
      intent === 'location11' || intent === 'location12' ||
      intent === 'location13' || intent === 'location14' ||
      intent === 'location15' || intent === 'location16' ||
      intent === 'location17' || intent === 'location18' ||
      intent === 'location19' || intent === 'location20' ||
      intent === 'location21' || intent === 'location22'  ) {
      data = await getDataFromLocality(connection); //โลเคชั่นอาคาร
    } else if (
      intent === 'place1'  || intent === 'place2'  ||
      intent === 'place3'  || intent === 'place4'  ||
      intent === 'place5'  || intent === 'place6'  ||
      intent === 'place7'  || intent === 'place8'  ||
      intent === 'place9'  || intent === 'place10'  ) {
      data = await getDataFromLocality(connection); //สถานที่
    } else if (intent === 'food') {
      data = await getRandomDataFromRestaurant(connection); //สุ่มร้านอาหารตามสั่ง
    } else if (intent === 'dessert-smoothie') {
      data = await getRandomDataFromDessert(connection); //สุ่มร้านของหวาน
    } else if (intent === 'grilled-shabu') {
      data = await getRandomDataFromGrilled_shabu(connection); //สุ่มร้านปิ้งย่าง
    } else if (intent === 'halalfood') {
      data = await getRandomDataFromMuslim(connection); //สุ่มร้านฮาลาล
    } else if (intent === 'noodles') {
      data = await getRandomDataFromNoodles(connection); //สุ่มร้านก๋วยเตี๋ยว
    } else if (intent === 'pharmacy') {
      data = await getRandomDataFromPharmacy(connection); //สุ่มร้านขายยา
    }

    // เพิ่มข้อมูลการสนทนาลงในตาราง conversation_history
    const conversationData = {
      intent: intent,
      text: text,
      data: JSON.stringify(data)
    };
    
    connection.query('INSERT INTO conversation_history SET ?', conversationData, (error, results, fields) => {
      if (error) {
        console.error(error);
        throw new Error('Failed to insert conversation history');
      } else {
        console.log('Conversation history inserted successfully');
      }
    });

    const response = await createTextResponse(intent, connection, data);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred');
  }
}


async function createTextResponse(intent, connection, data) {
  let textResponse = '';
//ชื่ออาคาร //ถามเลข
if (intent === 'building1') {
  const id = 1;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คืออาคารบริหาร ${data.building_name} 
อาคารบริหารเป็นอาคารสูง 4 ชั้น 
ชั้นที่ 1 เป็นห้องแสดงประวัติความเป็นมาของการจัดตั้งวิทยาเขตฯ
ชั้นที่ 2 เป็นสำนักงานของวิทยาเขต 
ชั้นที่ 3 เป็นสำนักงานผู้บริหารวิทยาเขต
ชั้นที่ 4 เป็นห้องเรียนระดับปริญญาโทและปริญญาเอกของวิทยาเขตครับ`;
} else if (intent === 'building2') {
  const id = 2;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 2 : ${data.building_name}
 (อาคารเรียนรวม)
 เป็นทั้งห้องเรียนและเป็นร้านอาหาร ร้านสะดวกซื้อ ร้านจำหน่ายอุปกรณ์การเรียน
 ธนาคาร และไปรษณีย์ รวมไปถึงใช้เป็นพื้นที่ในการสันทนาการ การรับน้องใหม่ การทำบุญตามวาระต่างๆของนิสิตครับ`;
} else if (intent === 'building3') {
  const id = 3;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 3: ${data.building_name}
  (อาคารชุดพักอาศัย)
  เป็นอาคารสวัสดิการเรื่องที่พักอาศัยของอาจารย์และบุคลากรทั้งโสดและครอบครัวครับ`;
} else if (intent === 'building4') {
  const id = 4;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 4: ${data.building_name}
  (หอพักนิสิตชาย)
  ประกอบด้วยห้องพักจำนวน 84 ห้อง ห้องสันทนาการ ห้องคอมพิวเตอร์ ห้องพักอาจารย์ประจำหอพัก 
  ห้องอ่านหนังสือ ห้องคอมพิวเตอร์ ห้องดูโทรทัศน์ โทรศัพท์ ห้องซักรีด ห้องพยาบาล 
  โดยระหว่างปิดภาคเรียนก็สามารถฝากของเก็บไว้ได้ตลอด 24 ชั่วโมงครับ`;
} else if (intent === 'building5') {
  const id = 5;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 5: ${data.building_name}
  (หอพักนิสิตหญิง)
  ประกอบด้วยห้องพักจำนวน 84 ห้อง ห้องสันทนาการ ห้องคอมพิวเตอร์ ห้องพักอาจารย์ประจำหอพัก 
  ห้องอ่านหนังสือ ห้องคอมพิวเตอร์ ห้องดูโทรทัศน์ โทรศัพท์ ห้องซักรีด ห้องพยาบาล 
  โดยระหว่างปิดภาคเรียนก็สามารถฝากของเก็บไว้ได้ตลอด 24 ชั่วโมงครับ`;
} else if (intent === 'building6') {
  const id = 6;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 6: ${data.building_name}
  (อาคารปฏิบัติการรวม)
  ประกอบด้วย ห้องปฏิบัติการทางด้านเคมี ด้านชีววิทยา ด้านฟิสิกส์ และด้านเขียนแบบวิศวกรรมครับ`;
} else if (intent === 'building7') {
  const id = 7;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 7: ${data.building_name}
  (อาคารวิทยาศาสตร์และเทคโนโลยี)
  เป็นอาคารเรียนปฏิบัติการทางวิทยาศาสตร์และวิศวกรรมศาสตร์และอุตสาหกรรมเกษตรครับ`;
} else if (intent === 'building8') {
  const id = 8;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 8: ${data.building_name}
  (อาคารปฏิบัติการวิศวกรรมเครื่องกล/เทคโนโลยีการอาหาร)
  อาคาร 8/1 และ 8/2 เป็นอาคารแฝดหลังคาเป็นรูปใบไม้
  8/1 เป็นอาคารฝึกปฏิบัติทางวิศวกรรมเครื่องกล ทดสอบ ทดลอง และวิจัยด้านเครื่องกลทุกชนิด สำหรับอาคาร 
  8/2 เป็นอาคารที่ใช้ฝึกทดลองในเรื่องการแปรรูปผลิตภัณฑ์ที่เกี่ยวกับอาหาร 
  การผลิต การปรุงแต่ง การถนอม การบรรจุภัณฑ์ การทดลอง ค้นคว้า พัฒนาอาหาร เครื่องดื่มชนิดต่างๆครับ`;
} else if (intent === 'building9') {
  const id = 9;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 9: ${data.building_name}
  (อาคารเทคโนโลยีสารสนเทศ)
  เป็นศูนย์กลางทางด้านเทคโนโยลีสารสนเทศและการสื่อสาร บริการคอมพิวเตอร์ การเรียนการสอนทางไกล
  ฝึกอบรม สัมมนา และห้องสมุด นับเป็นอาคารศูนย์รวมระบบสารสนเทศที่สมบูรณ์แบบของวิทยาเขตครับ`;
} else if (intent === 'building10') {
  const id = 10;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 10: ${data.building_name}
  (โรงอาหารกลาง)
  เป็นอาคารอเนกประสงค์ของอาจารย์และนิสิต นอกจากจะใช้เป็นโรงอาหารแล้ว
  ยังมีร้านค้าขายหนังสือ อุปกรณ์เครื่องใช้ที่จำเป็นสำหรับการเรียนการสอน ร้านสะดวกซื้อ  ร้านถ่ายเอกสารครับ`;
} else if (intent === 'building11') {
  const id = 11;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 11 : ${data.building_name}
  (โรงกรองน้ำและหอวิทยาเขต)
  ใช้เป็นแหล่งผลิตน้ำประปาของวิทยาเขต
  ประกอบด้วย โรงสูบน้ำ โรงกรองน้ำและฆ่าเชื้อโรคครับ`;
} else if (intent === 'building12') {
  const id = 12;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 12: ${data.building_name}
  (อาคารสนามกีฬา)
  พื้นที่เตรียมความพร้อมสำหรับนักกีฬาและกรรมการ พื้นที่สำหรับกิจกรรมของนิสิตที่เกี่ยวข้องกับการกีฬา 
  สนามฟุตบอลมาตรฐาน พร้อมลู่วิ่งกีฬา กรีฑาและอาคารคบเพลิง พร้อมระบบแสงสว่าง 
  สนามเทนนิสมาตรฐาน 2 สนาม พร้อมน๊อคบอร์ด และอุปกรณ์การตัดสินครับ`;
} else if (intent === 'building13') {
  const id = 13;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 13: ${data.building_name}
  (พิพิธภัณฑ์องค์ความรู้ )
  เป็นห้องนิทรรศการเฉลิมพระเกียรติพระบาทสมเด็จพระเจ้าอยู่หัว ห้องนิทรรศการเกี่ยวกับปฐพีวิทยา 
  และห้องหอประวัติของวิทยาเขต บริเวณกลางอาคารเปิดโล่งจัดเป็นสวนแสดงพันธุ์ไม้หอมของไทย
  ส่วนชั้นบนประกอบด้วยห้องสัมมาทิฐิ ห้องประชุม ห้องทำงาน และห้องเรียนครับ`;
} else if (intent === 'building14') {
  const id = 14;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 14: ${data.building_name}
  (อาคารวิทยาเขตเฉลิมพระเกียรติ)
  เป็นอาคารที่จะเพิ่มความสมบูรณ์ครบถ้วนให้กับวิทยาเขต ประกอบด้วย หอประชุมวิโรจอิ่มพิทักษ์ 
  ซึ่งรองรับผู้เข้าร่วมประชุมได้ 3,000 คน ใช้ประโยชน์ด้านการประชุมสัมมนา จัดกิจกรรมสำคัญๆ อาทิ 
  การอบรมพัฒนาบัณฑิตยุคใหม่ การไหว้ครู การจัดแสดงนิทรรศการ พิธีในโอกาสสำคัญๆ ของมหาวิทยาลัยครับ`;
} else if (intent === 'building15') {
  const id = 15;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 15: ${data.building_name}
  (อาคารถิ่นมันในพุทธธรรม)
  สร้างเพื่อประดิษฐานพระพุทธรูปพระพุทธชินสีห์จำลองซึ่งเป็นพระพุทธรูปประจำมหาวิทยาลัย
  เป็นประธานประกอบพิธี อาคารถิ่นมั่นในพุทธธรรมเป็นศูนย์รวมจิตใจในการบำเพ็ญภาวนา 
  และปฏิบัติธรรมของอาจารย์ นิสิต และบุคลากรทั่วไปด้วยครับ`;
} else if (intent === 'building16') {
  const id = 16;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 16: ${data.building_name}
  (อาคารสถานพยาบาล)
  เพื่อใช้เป็นศูนย์กลางการให้การรักษาพยาบาลสำหรับอาจารย์ 
  บุคลากร และนิสิต รวมทั้งใช้เป็นที่ประชุมในงานของกิจการนิสิตอีกด้วยครับ`;
} else if (intent === 'building17') {
  const id = 17;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 17: ${data.building_name}
  (อาคารชุดพักอาศัยบุคลากร 2)
  เพื่อเป็นสวัสดิการให้บุคลากรในวิทยาเขตพักอาศัย เนื่องจากจำนวนบุคลากรมีเพิ่มขึ้นอย่างต่อเนื่องครับ`;
} else if (intent === 'building18') {
  const id = 18;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 18: ${data.building_name}
  (หอพักนิสิตหญิงตาลฟ้า)
  เป็นอาคารหอพักนิสิตหญิงหลังที่ 2 ของวิทยาเขต วัตถุประสงค์เพื่อเป็นอาคารให้นิสิตหญิงในวิทยาเขตพักอาศัย
  เนี่องจากจำนวนนิสิตหญิงมีเพิ่มมากขึ้นทุกปีและอาคารหอพักเดิมไม่เพียงพอต่อความต้องการครับ`;
} else if (intent === 'building19') {
  const id = 19;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 19 ${data.building_name}
  (อาคารปฏิบัติการด้านวิทยาศาสตร์การกีฬา)
  เป็นอาคารที่ใช้สำหรับการเรียนการสอนเกี่ยวกับการกีฬาและใช้สำหรับการแข่งขันกีฬาต่างๆครับ`;
} else if (intent === 'building20') {
  const id = 20;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 20 ${data.building_name}
  (อาคารปฏิบัติการด้านวิทยาศาสตร์สุขภาพ)
  เป็นอาคารที่ใช้สำหรับการเรียนการสอนของ 
  คณะสาธารณสุขศาสตร์และคณะศฺิลปศาสตร์และวิทยาการจัดการและมีห้องศาลจำลอง ของหลักสูตรนิติศาสตร์ครับ`;
} else if (intent === 'building21') {
  const id = 21;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 21 ${data.building_name}
  (อาคารปฏิบัติการด้านทรัพยากรสิ่งแวดล้อม)
  เป็นอาคารที่ใช้สำหรับการเรียนการสอนของ คณะทรัพยากรธรรมชาติและอุตสาหกรรมเกษตรครับ`;
} else if (intent === 'building22') {
  const id = 22;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 22 ${data.building_name}
  (อาคารปฏิบัติการและวิจัยทางวิทยาศาสตร์)
  เป็นอาคารที่ใช้สำหรับการเรียนการสอน ปฏิบัติการและวิจัยทางวิทยาศาสตร์ครับ`;
  
//หมายเลขอาคาร //ถามชื่อ
} else if (intent === 'number1') {
  const id = 1;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 1 ${data.name}
  อาคารบริหารเป็นอาคารสูง 4 ชั้น 
  ชั้นที่ 1 เป็นห้องแสดงประวัติความเป็นมาของการจัดตั้งวิทยาเขตฯ
  ชั้นที่ 2 เป็นสำนักงานของวิทยาเขต 
  ชั้นที่ 3 เป็นสำนักงานผู้บริหารวิทยาเขต
  ชั้นที่ 4 เป็นห้องเรียนระดับปริญญาโทและปริญญาเอกของวิทยาเขตครับ`;
} else if (intent === 'number2') {
  const id = 2;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 2: ${data.name}
  (อาคารเรียนรวม)
 เป็นทั้งห้องเรียนและเป็นร้านอาหาร ร้านสะดวกซื้อ ร้านจำหน่ายอุปกรณ์การเรียน
 ธนาคาร และไปรษณีย์ รวมไปถึงใช้เป็นพื้นที่ในการสันทนาการ การรับน้องใหม่ การทำบุญตามวาระต่างๆของนิสิตครับ`;
} else if (intent === 'number3') {
  const id = 3;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 3: ${data.name}
  (อาคารชุดพักอาศัย)
  เป็นอาคารสวัสดิการเรื่องที่พักอาศัยของอาจารย์และบุคลากรทั้งโสดและครอบครัวครับ`;
} else if (intent === 'number4') {
  const id = 4;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 4: ${data.name}
  (หอพักนิสิตชาย)
  ประกอบด้วยห้องพักจำนวน 84 ห้อง ห้องสันทนาการ ห้องคอมพิวเตอร์ ห้องพักอาจารย์ประจำหอพัก 
  ห้องอ่านหนังสือ ห้องคอมพิวเตอร์ ห้องดูโทรทัศน์ โทรศัพท์ ห้องซักรีด ห้องพยาบาล 
  โดยระหว่างปิดภาคเรียนก็สามารถฝากของเก็บไว้ได้ตลอด 24 ชั่วโมงครับ`;
} else if (intent === 'number5') {
  const id = 5;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 5: ${data.name}
  (หอพักนิสิตหญิง)
  ประกอบด้วยห้องพักจำนวน 84 ห้อง ห้องสันทนาการ ห้องคอมพิวเตอร์ ห้องพักอาจารย์ประจำหอพัก 
  ห้องอ่านหนังสือ ห้องคอมพิวเตอร์ ห้องดูโทรทัศน์ โทรศัพท์ ห้องซักรีด ห้องพยาบาล 
  โดยระหว่างปิดภาคเรียนก็สามารถฝากของเก็บไว้ได้ตลอด 24 ชั่วโมงครับ`;
} else if (intent === 'number6') {
  const id = 6;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 6: ${data.name}
  (อาคารปฏิบัติการรวม)
  ประกอบด้วย ห้องปฏิบัติการทางด้านเคมี ด้านชีววิทยา ด้านฟิสิกส์ และด้านเขียนแบบวิศวกรรมครับ`;
} else if (intent === 'number7') {
  const id = 7;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 7: ${data.name}
  (อาคารวิทยาศาสตร์และเทคโนโลยี)
  เป็นอาคารเรียนปฏิบัติการทางวิทยาศาสตร์และวิศวกรรมศาสตร์และอุตสาหกรรมเกษตรครับ`;
} else if (intent === 'number8') {
  const id = 8;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 8: ${data.name}
  (อาคารปฏิบัติการวิศวกรรมเครื่องกล/เทคโนโลยีการอาหาร)
  อาคาร 8/1 และ 8/2 เป็นอาคารแฝดหลังคาเป็นรูปใบไม้
  8/1 เป็นอาคารฝึกปฏิบัติทางวิศวกรรมเครื่องกล ทดสอบ ทดลอง และวิจัยด้านเครื่องกลทุกชนิด สำหรับอาคาร 
  8/2 เป็นอาคารที่ใช้ฝึกทดลองในเรื่องการแปรรูปผลิตภัณฑ์ที่เกี่ยวกับอาหาร 
  การผลิต การปรุงแต่ง การถนอม การบรรจุภัณฑ์ การทดลอง ค้นคว้า พัฒนาอาหาร เครื่องดื่มชนิดต่างๆครับ`;
} else if (intent === 'number9') {
  const id = 9;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 9: ${data.name}
  (อาคารเทคโนโลยีสารสนเทศ)
  เป็นศูนย์กลางทางด้านเทคโนโยลีสารสนเทศและการสื่อสาร บริการคอมพิวเตอร์ การเรียนการสอนทางไกล
  ฝึกอบรม สัมมนา และห้องสมุด นับเป็นอาคารศูนย์รวมระบบสารสนเทศที่สมบูรณ์แบบของวิทยาเขตครับ`;
} else if (intent === 'number10') {
  const id = 10;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 10: ${data.name}
  (โรงอาหารกลาง)
  เป็นอาคารอเนกประสงค์ของอาจารย์และนิสิต นอกจากจะใช้เป็นโรงอาหารแล้ว
  ยังมีร้านค้าขายหนังสือ อุปกรณ์เครื่องใช้ที่จำเป็นสำหรับการเรียนการสอน ร้านสะดวกซื้อ  ร้านถ่ายเอกสารครับ`;
} else if (intent === 'number11') {
  const id = 11;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 11: ${data.name}
  (โรงกรองน้ำและหอวิทยาเขต)
  ใช้เป็นแหล่งผลิตน้ำประปาของวิทยาเขต
  ประกอบด้วย โรงสูบน้ำ โรงกรองน้ำและฆ่าเชื้อโรคครับ`;
} else if (intent === 'number12') {
  const id = 12;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 12: ${data.name}
  (อาคารสนามกีฬา)
  พื้นที่เตรียมความพร้อมสำหรับนักกีฬาและกรรมการ พื้นที่สำหรับกิจกรรมของนิสิตที่เกี่ยวข้องกับการกีฬา 
  สนามฟุตบอลมาตรฐาน พร้อมลู่วิ่งกีฬา กรีฑาและอาคารคบเพลิง พร้อมระบบแสงสว่าง 
  สนามเทนนิสมาตรฐาน 2 สนาม พร้อมน๊อคบอร์ด และอุปกรณ์การตัดสินครับ`;
} else if (intent === 'number13') {
  const id = 13;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 13: ${data.name}
  (พิพิธภัณฑ์องค์ความรู้ )
  เป็นห้องนิทรรศการเฉลิมพระเกียรติพระบาทสมเด็จพระเจ้าอยู่หัว ห้องนิทรรศการเกี่ยวกับปฐพีวิทยา 
  และห้องหอประวัติของวิทยาเขต บริเวณกลางอาคารเปิดโล่งจัดเป็นสวนแสดงพันธุ์ไม้หอมของไทย
  ส่วนชั้นบนประกอบด้วยห้องสัมมาทิฐิ ห้องประชุม ห้องทำงาน และห้องเรียนครับ`;
} else if (intent === 'number14') {
  const id = 14;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 14: ${data.name}
  (อาคารวิทยาเขตเฉลิมพระเกียรติ)
  เป็นอาคารที่จะเพิ่มความสมบูรณ์ครบถ้วนให้กับวิทยาเขต ประกอบด้วย หอประชุมวิโรจอิ่มพิทักษ์ 
  ซึ่งรองรับผู้เข้าร่วมประชุมได้ 3,000 คน ใช้ประโยชน์ด้านการประชุมสัมมนา จัดกิจกรรมสำคัญๆ อาทิ 
  การอบรมพัฒนาบัณฑิตยุคใหม่ การไหว้ครู การจัดแสดงนิทรรศการ พิธีในโอกาสสำคัญๆ ของมหาวิทยาลัยครับ`;
} else if (intent === 'number15') {
  const id = 15;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 15: ${data.name}
  (อาคารถิ่นมันในพุทธธรรม)
  สร้างเพื่อประดิษฐานพระพุทธรูปพระพุทธชินสีห์จำลองซึ่งเป็นพระพุทธรูปประจำมหาวิทยาลัย
  เป็นประธานประกอบพิธี อาคารถิ่นมั่นในพุทธธรรมเป็นศูนย์รวมจิตใจในการบำเพ็ญภาวนา 
  และปฏิบัติธรรมของอาจารย์ นิสิต และบุคลากรทั่วไปด้วยครับ`;
} else if (intent === 'number16') {
  const id = 16;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 16: ${data.name}
  (อาคารสถานพยาบาล)
  เพื่อใช้เป็นศูนย์กลางการให้การรักษาพยาบาลสำหรับอาจารย์ 
  บุคลากร และนิสิต รวมทั้งใช้เป็นที่ประชุมในงานของกิจการนิสิตอีกด้วยครับ`;
} else if (intent === 'number17') {
  const id = 17;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 17: ${data.name}
  (อาคารชุดพักอาศัยบุคลากร 2)
  เพื่อเป็นสวัสดิการให้บุคลากรในวิทยาเขตพักอาศัย เนื่องจากจำนวนบุคลากรมีเพิ่มขึ้นอย่างต่อเนื่องครับ`;
} else if (intent === 'number18') {
  const id = 18;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 18: ${data.name}
  (หอพักนิสิตหญิงตาลฟ้า)
  เป็นอาคารหอพักนิสิตหญิงหลังที่ 2 ของวิทยาเขต วัตถุประสงค์เพื่อเป็นอาคารให้นิสิตหญิงในวิทยาเขตพักอาศัย
  เนี่องจากจำนวนนิสิตหญิงมีเพิ่มมากขึ้นทุกปีและอาคารหอพักเดิมไม่เพียงพอต่อความต้องการครับ`;
} else if (intent === 'number19') {
  const id = 19;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 19: ${data.name}
  (อาคารปฏิบัติการด้านวิทยาศาสตร์การกีฬา)
  เป็นอาคารที่ใช้สำหรับการเรียนการสอนเกี่ยวกับการกีฬาและใช้สำหรับการแข่งขันกีฬาต่างๆครับ`;
} else if (intent === 'number20') {
  const id = 20;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 20: ${data.name}
  (อาคารปฏิบัติการด้านวิทยาศาสตร์สุขภาพ)
  เป็นอาคารที่ใช้สำหรับการเรียนการสอนของ 
  คณะสาธารณสุขศาสตร์และคณะศฺิลปศาสตร์และวิทยาการจัดการและมีห้องศาลจำลอง ของหลักสูตรนิติศาสตร์ครับ`;
} else if (intent === 'number21') {
  const id = 21;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร21: ${data.name}
  (อาคารปฏิบัติการด้านทรัพยากรสิ่งแวดล้อม)
  เป็นอาคารที่ใช้สำหรับการเรียนการสอนของ คณะทรัพยากรธรรมชาติและอุตสาหกรรมเกษตรครับ`;
} else if (intent === 'number22') {
  const id = 22;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คือชื่อของอาคาร 22 : ${data.name}
  (อาคารปฏิบัติการและวิจัยทางวิทยาศาสตร์)
  เป็นอาคารที่ใช้สำหรับการเรียนการสอน ปฏิบัติการและวิจัยทางวิทยาศาสตร์ครับ`;

  //โลเคชั่น + รูปภาพ //
} else if (intent === "location1") {
  const id = 1;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารบริหาร หรือ อาคาร1ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location2') {
  const id = 2;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารเรียนรวม หรือ อาคาร2ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location3') {
  const id = 3;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารชุดพักอาศัย หรือ อาคาร3ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location4') {
  const id = 4;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารหอพักนิสิตชาย หรือ อาคาร4ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location5') {
  const id = 5;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารหอพักนิสิตหญิง หรือ อาคาร5ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location6') {
  const id = 6;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารปฏิบัติการรวม หรือ อาคาร6ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location7') {
  const id = 7;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารวิทยาศาสตร์และเทคโนโลยี หรือ อาคาร7ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location8') {
  const id = 8;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารปฏิบัติการวิศวกรรมเครื่องกล/เทคโนโลยีการอาหาร หรือ อาคาร8ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location9') {
  const id = 9;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารเทคโนโลยีสารสนเทศ หรือ อาคาร9ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location10') {
  const id = 10;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารโรงอาหารกลาง หรือ อาคาร10ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location11') {
  const id = 11;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารโรงกรองน้ำและหอวิทยาเขต หรือ อาคาร11ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location12') {
  const id = 12;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารสนามกีฬา หรือ อาคาร12ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location13') {
  const id = 13;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารพิพิธภัณฑ์องค์ความรู้ หรือ อาคาร13ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location14') {
  const id = 14;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารวิทยาเขตเฉลิมพระเกียรติ หรือ อาคาร14ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location15') {
  const id = 15;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารถิ่นมันในพุทธธรรม หรือ อาคาร15ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location16') {
  const id = 16;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารสถานพยาบาล หรือ อาคาร16ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location17') {
  const id = 17;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารชุดพักอาศัยบุคลากร 2 หรือ อาคาร17ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location18') {
  const id = 18;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารหอพักนิสิตหญิงตาลฟ้า หรือ อาคาร18ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location19') {
  const id = 19;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารปฏิบัติการด้านวิทยาศาสตร์การกีฬา หรือ อาคาร19ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location20') {
  const id = 20;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารปฏิบัติการด้านวิทยาศาสตร์สุขภาพ หรือ อาคาร20ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location21') {
  const id = 21;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารปฏิบัติการด้านทรัพยากรสิ่งแวดล้อม หรือ อาคาร21ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
} else if (intent === 'location22') {
  const id = 22;
  data = await getDataFromId(connection, id);
  textResponse = `และนี่คือตำแหน่งของอาคารปฏิบัติการและวิจัยทางวิทยาศาสตร์ หรือ อาคาร22ครับ ${data.map_link} รูปภาพ : ${data.image_file} ครับ`;
  
//ร้านอาหารตามสั่ง + โลเคชั่น
} else if (intent === 'food') {
  data = await getRandomDataFromrestaurant(connection);
  textResponse = `ของแนะนำ: ร้าน ${data.restaurant_} ที่ตั้ง: ${data.map_link} ครับ`;

//อาหารฮาลาล + โลเคชั่น
} else if (intent === 'halalfood') {
  data = await getRandomDataFromMuslim(connection);
  textResponse = `ของแนะนำ: ร้าน ${data.muslim_} ที่ตั้ง: ${data.map_link} ครับ`;

//ร้านก๋วยเตี๋ยว + โลเคชั่น
} else if (intent === 'noodles') {
  data = await getRandomDataFromNoodles(connection);
  textResponse = `ของแนะนำ: ร้าน ${data.noodles_} ที่ตั้ง: ${data.map_link} ครับ`;

//ร้านชาบู-ปิ้งย่าง + โลเคชั่น
} else if (intent === 'grilled-shabu') {
  data = await getRandomDataFromGrilled_shabu(connection);
  textResponse = `ของแนะนำ: ร้าน ${data.grilled_shabu} ที่ตั้ง: ${data.map_link} ครับ`;

//ร้านน้ำปั่น-ของหวาน + โลเคชั่น
} else if (intent === 'dessert-smoothie') {
  data = await getRandomDataFromDessert(connection);
  textResponse = `ของแนะนำ: ร้าน ${data.dessert_} ที่ตั้ง: ${data.map_link} ครับ`;

//ร้านขายยา + โลเคชั่น
} else if (intent === 'pharmacy') {
  data = await getRandomDataFromPharmacy(connection);
  textResponse = `ของแนะนำ: ร้าน ${data.pharmacy_} ที่ตั้ง: ${data.map_link} ครับ`;

//สถานที่
} else if (intent === 'place1') {
  const id = 1;
  data = await getDataFromLocality(connection, id);
  textResponse = `ลานพระพิรุณ  ที่อยู่ : ${data.map_link} รูปภาพ: ${data.image_file} ครับ`;
} else if (intent === 'place2') {
  const id = 2;
  data = await getDataFromLocality(connection, id);
  textResponse = `สวนเสลา-อินทนิลน้ำ ที่อยู่ : ${data.map_link} รูปภาพ: ${data.image_file} ครับ`;
} else if (intent === 'place3') {
  const id = 3;
  data = await getDataFromLocality(connection, id);
  textResponse = `ลานปรัชญา ที่อยู่ : ${data.map_link} รูปภาพ: ${data.image_file} ครับ`;
} else if (intent === 'place4') {
  const id = 4;
  data = await getDataFromLocality(connection, id);
  textResponse = `อุทยานธรรมชาติ วิทยาป่าเต็งรัง  ที่อยู่ : ${data.map_link} รูปภาพ: ${data.image_file} ครับ`;
} else if (intent === 'place5') {
  const id = 5;
  data = await getDataFromLocality(connection, id);
  textResponse = `โรงเรือนแกะ  ที่อยู่ : ${data.map_link} รูปภาพ: ${data.image_file} ครับ`;
} else if (intent === 'place6') {
  const id = 6;
  data = await getDataFromLocality(connection, id);
  textResponse = `ฟาร์มพืช  ที่อยู่ : ${data.map_link} รูปภาพ: ${data.image_file} ครับ`;
} else if (intent === 'place7') {
  const id = 7;
  data = await getDataFromLocality(connection, id);
  textResponse = `BoxZone.s  ที่อยู่ : ${data.map_link} รูปภาพ: ${data.image_file} ครับ`;
} else if (intent === 'place8') {
  const id = 8;
  data = await getDataFromLocality(connection, id);
  textResponse = `CSC Sunflower Field ที่อยู่ : ${data.map_link} รูปภาพ: ${data.image_file} ครับ`;
} else if (intent === 'place9') {
  const id = 8;
  data = await getDataFromLocality(connection, id);
  textResponse = `CSC Sunflower Field ที่อยู่ : ${data.map_link} รูปภาพ: ${data.image_file} ครับ`;
} else if (intent === 'place10') {
const id = 9;
data = await getDataFromLocality(connection, id);
textResponse = `อ่างสกล หรือ ท่าน้ำพงษ์ศักดิ์สุริยวนากุล ที่อยู่ : ${data.map_link} รูปภาพ: ${data.image_file} ครับ`;

//ห้อง //แก้ไข
} else if (intent === 'place1') {
  const id = 1;
  data = await getDataFromId(connection, id);
  textResponse = `นี่คืออาคาร ${data.room} นี่คือชื่อของอาคาร 1 ครับ`;
} else if (intent === 'place2') {
  const id = 2;
  data = await getDataFromId(connection, id);
  textResponse = `คำตอบจาก Intent 2: ${data.room} ครับ`;
} else if (intent === 'place3') {
  const id = 3;
  data = await getDataFromId(connection, id);
  textResponse = `คำตอบจาก Intent 3: ${data.room} ครับ`;
} else if (intent === 'place4') {
  const id = 4;
  data = await getDataFromId(connection, id);
  textResponse = `คำตอบจาก Intent 4: ${data.room} ครับ`;
} else if (intent === 'place5') {
  const id = 5;
  data = await getDataFromId(connection, id);
  textResponse = `คำตอบจาก Intent 5: ${data.room} ครับ`;
} else if (intent === 'place6') {
  const id = 6;
  data = await getDataFromId(connection, id);
  textResponse = `คำตอบจาก Intent 5: ${data.room} ครับ`;
} else if (intent === 'place7') {
  const id = 7;
  data = await getDataFromId(connection, id);
  textResponse = `คำตอบจาก Intent 5: ${data.room} ครับ`;
} else if (intent === 'place8') {
  const id = 8;
  data = await getDataFromId(connection, id);
  textResponse = `คำตอบจาก Intent 5: ${data.room} ครับ`;
} else if (intent === 'place9') {
  const id = 9;
  data = await getDataFromId(connection, id);
  textResponse = `คำตอบจาก Intent 5: ${data.room} ครับ`;
} else if (intent === 'place10') {
  const id = 10;
  data = await getDataFromId(connection, id);
  textResponse = `คำตอบจาก Intent 5: ${data.room} ครับ`;
  
} else {
  textResponse = 'คำตอบสำหรับ Intent อื่นๆ';

}
  return {
    fulfillmentMessages: [
      {
        text: {
          text: [textResponse]
        }
      }
    ]
  };
}

module.exports = addConversationHistory;
