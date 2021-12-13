import {Image} from 'react-native';

export default cdata = [
  {
    title: 'האפליקציה החדשה של ספורט1 !',
    body: 'ברוך הבא לאפליקציית הספורט הראשונה בישראל שמותאמת במיוחד עבורך',
    imgUrl: Image.resolveAssetSource(
      require('../../../assets/images/caro1.png'),
    ).uri,
  },
  {
    title: 'וידאו ללא הגבלה',
    body: 'צפה בליגות הטובות בעולם בספריית ה-VOD הגדולה בישראל',
    imgUrl: Image.resolveAssetSource(
      require('../../../assets/images/caro2.png'),
    ).uri,
  },
  {
    title: 'מה מעניין אותך?',
    body: 'בחר את הקבוצות והליגות שלך ותהנה מחוויה מותאמת אישית, בחינם.',
    imgUrl: Image.resolveAssetSource(
      require('../../../assets/images/caro3.png'),
    ).uri,
  },
];
