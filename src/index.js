// By - Default 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gender from './Components/Gender';
import Diseases from './Components/Diseases';
// Pain - Section
import Pain_Parts from './Components/Pain/Pain_Parts'
import Upper_Parts from './Components/Pain/Upper Parts Pain/Upper_Parts'
import Headache_types from './Components/Pain/Upper Parts Pain/Headache_types'
import Headache_Migrine from './Components/Pain/Upper Parts Pain/Headache_Migrine'
import Chronic_Headache_Pain from './Components/Pain/Upper Parts Pain/Chronic_Headache_Pain'
import Ear_Pain from './Components/Pain/Upper Parts Pain/Ear_Pain';
import Teeth_pain from './Components/Pain/Upper Parts Pain/Teeth_pain';
import Middle_Parts from './Components/Pain/Middle Parts Pain/Middle_Parts'
import Shoulder_Pain from './Components/Pain/Middle Parts Pain/Shoulder_Pain'
import Arms_Pain from './Components/Pain/Middle Parts Pain/Arms_Pain'
import Right_Arm from './Components/Pain/Middle Parts Pain/Right_Arm';
import Left_Arm from './Components/Pain/Middle Parts Pain/Left_Arm';
import Chest_Pain from './Components/Pain/Middle Parts Pain/Chest_Pain'
import Heart_Pain from './Components/Pain/Middle Parts Pain/Heart_Pain';
import Lungs_Pain from './Components/Pain/Middle Parts Pain/Lungs_Pain'
import Right_Lung from './Components/Pain/Middle Parts Pain/Right_Lung';
import Left_Lung from './Components/Pain/Middle Parts Pain/Left_Lung';
import Stomach_Pain from './Components/Pain/Middle Parts Pain/Stomach_Pain';
import Liver_Pain from './Components/Pain/Middle Parts Pain/Liver_Pain';
import Lower_Back_Pain from './Components/Pain/Middle Parts Pain/Lower_Back_Pain'
import Kidney_Pain from './Components/Pain/Middle Parts Pain/Kidney_Pain';
import Muscular_Pain from './Components/Pain/Middle Parts Pain/Muscular_Pain';
import Urinary_Tract_Pain from './Components/Pain/Middle Parts Pain/Urinary_Tract_Pain';
import Lower_Parts from './Components/Pain/Lower Parts Pain/Lower_Parts'
import Hips_Pain from './Components/Pain/Lower Parts Pain/Hips_Pain';
import Legs_Pain from './Components/Pain/Lower Parts Pain/Legs_Pain'
import Knee_Pain from './Components/Pain/Lower Parts Pain/Knee_Pain';
import Muscular_Pain_Leg from './Components/Pain/Lower Parts Pain/Muscular_Pain_Leg'
import Foot_Pain from './Components/Pain/Lower Parts Pain/Foot_Pain';
// Infection - Section
import Infections from './Components/Infections/Infections'
import Digestive_System_Infections from './Components/Infections/Digestive_System_Infections'
import Blood_Infections from './Components/Infections/Blood_Infections'
import Urinary_Tract_Infections from './Components/Infections/Urinary_Tract_Infections'
import Inhalatory_Tract_Infections from './Components/Infections/Inhalatory_Tract_Infections'
import Fingers_Infections from './Components/Infections/Fingers_Infections'
import Surgical_Site_Infections from './Components/Infections/Surgical_Site_Infections'
import Skin_Infections from './Components/Infections/Skin_Infections'
import Mouth_Infections from './Components/Infections/Mouth_Infections'
import Kidney_Infections from './Components/Infections/Kidney_Infections'
import Liver_Infections from './Components/Infections/Liver_Infections'
import Heart_Infections from './Components/Infections/Heart_Infections';
import Spleen_Infections from './Components/Infections/Spleen_Infections';
// Wounds - Section
import Wounds_File from './Components/Wounds/Wounds_File'
import Sores from './Components/Wounds/Sores/Sores'
import Mouth_Sores from './Components/Wounds/Sores/Mouth_Sores'
import Throat_Sores from './Components/Wounds/Sores/Throat_Sores'
import Nose_Sores from './Components/Wounds/Sores/Nose_Sores'
import Burning_File from './Components/Wounds/Burning/Burning_File'
import Chemical_Burns from './Components/Wounds/Burning/Chemical_Burns'
import Electrical_Burns from './Components/Wounds/Burning/Electrical_Burns'
import Radiation_Burns from './Components/Wounds/Burning/Radiation_Burns'
import Thermal_Burns from './Components/Wounds/Burning/Thermal_Burns'
import Fractures_File from './Components/Wounds/Fractures/Fractures_File';
import Arm_Fractures from './Components/Wounds/Fractures/Arm_Fractures';
import Leg_Fractures from './Components/Wounds/Fractures/Leg_Fractures';
import Head_Fractures from './Components/Wounds/Fractures/Head_Fractures';
// Acne - Section
import Acne_File from './Components/Acne/Acne_File';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/gender',
    element: <Gender />,
  },
  {
    path: '/gender/diseases',
    element: <Diseases />,
  },
  {
    path: '/gender/diseases/pain_parts',
    element: <Pain_Parts />,
  },
  {
    path: '/gender/diseases/pain_parts/Upper_Parts',
    element: <Upper_Parts />,
  },
  {
    path: '/gender/diseases/pain_parts/Upper_Parts/Headache_types',
    element: <Headache_types />,
  },
  {
    path: '/gender/diseases/pain_parts/Upper_Parts/Headache_types/Headache_Migrine',
    element: <Headache_Migrine />,
  },
  {
    path: '/gender/diseases/pain_parts/Upper_Parts/Headache_types/Chronic_Headache_Pain',
    element: <Chronic_Headache_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/Upper_Parts/Ear_Pain',
    element: <Ear_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/Upper_Parts/Teeth_Pain',
    element: <Teeth_pain />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts',
    element: <Middle_Parts/>,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/shoulder_pain',
    element: <Shoulder_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/Arms_pain',
    element: <Arms_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/Arms_pain/Right_Arm',
    element: <Right_Arm />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/Arms_pain/Left_Arm',
    element: <Left_Arm />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/chest_pain',
    element: <Chest_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/chest_pain/heart_pain',
    element: <Heart_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/chest_pain/Lungs_Pain',
    element: <Lungs_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/chest_pain/Lungs_Pain/right_lung',
    element: <Right_Lung />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/chest_pain/Lungs_Pain/left_lung',
    element: <Left_Lung />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/chest_pain/stomach_pain',
    element: <Stomach_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/chest_pain/liver_Pain',
    element: <Liver_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/chest_pain/lower_back_Pain',
    element: <Lower_Back_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/chest_pain/lower_back_Pain/kidney_pain',
    element: <Kidney_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/chest_pain/lower_back_Pain/muscular_pain',
    element: <Muscular_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/middle_parts/chest_pain/urinary_tract_pain',
    element: <Urinary_Tract_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/lower_parts',
    element: <Lower_Parts />,
  },
  {
    path: '/gender/diseases/pain_parts/lower_parts/hips_pain',
    element: <Hips_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/lower_parts/legs_pain',
    element: <Legs_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/lower_parts/legs_pain/knee_pain',
    element: <Knee_Pain />,
  },
  {
    path: '/gender/diseases/pain_parts/lower_parts/legs_pain/muscular_pain_leg',
    element: <Muscular_Pain_Leg />,
  },
  {
    path: '/gender/diseases/pain_parts/lower_parts/foot_pain',
    element: <Foot_Pain />,
  },
  {
    path: '/gender/diseases/infections',
    element: <Infections />,
  },
  {
    path: '/gender/diseases/infections/digestive_system_infections',
    element: <Digestive_System_Infections />,
  },
  {
    path: '/gender/diseases/infections/blood_infections',
    element: <Blood_Infections />,
  },
  {
    path: '/gender/diseases/infections/urinary_tract_infections',
    element: <Urinary_Tract_Infections />,
  },
  {
    path: '/gender/diseases/infections/inhalatory_tract_infections',
    element: <Inhalatory_Tract_Infections />,
  },
  {
    path: '/gender/diseases/infections/fingers_infections',
    element: <Fingers_Infections />,
  },
  {
    path: '/gender/diseases/infections/surgical_site_infections',
    element: <Surgical_Site_Infections />,
  },
  {
    path: '/gender/diseases/infections/skin_infections',
    element: <Skin_Infections />,
  },
  {
    path: '/gender/diseases/infections/mouth_infections',
    element: <Mouth_Infections />,
  },
  {
    path: '/gender/diseases/infections/kidney_infections',
    element: <Kidney_Infections />,
  },
  {
    path: '/gender/diseases/infections/liver_infections',
    element: <Liver_Infections />,
  },
  {
    path: '/gender/diseases/infections/heart_infections',
    element: <Heart_Infections />,
  },
  {
    path: '/gender/diseases/infections/spleen_infections',
    element: <Spleen_Infections />,
  },
  {
    path: '/gender/diseases/wounds_file',
    element: <Wounds_File />,
  },
  {
    path: '/gender/diseases/wounds_file/sores',
    element: <Sores />,
  },
  {
    path: '/gender/diseases/wounds_file/sores/mouth_sores',
    element: <Mouth_Sores />,
  },
  {
    path: '/gender/diseases/wounds_file/sores/nose_sores',
    element: <Nose_Sores />,
  },
  {
    path: '/gender/diseases/wounds_file/sores/throat_sores',
    element: <Throat_Sores />,
  },
  {
    path: '/gender/diseases/wounds_file/burning_file',
    element: <Burning_File />,
  },
  {
    path: '/gender/diseases/wounds_file/burning_file/thermal_burns',
    element: <Thermal_Burns />,
  },
  {
    path: '/gender/diseases/wounds_file/burning_file/radiation_burns',
    element: <Radiation_Burns />,
  },
  {
    path: '/gender/diseases/wounds_file/burning_file/Electrical_burns',
    element: <Electrical_Burns />,
  },
  {
    path: '/gender/diseases/wounds_file/burning_file/chemical_burns',
    element: <Chemical_Burns />,
  },
  {
    path: '/gender/diseases/wounds_file/fractures_file',
    element: <Fractures_File />,
  },
  {
    path: '/gender/diseases/wounds_file/fractures_file/arm_fractures',
    element: <Arm_Fractures />,
  },
  {
    path: '/gender/diseases/wounds_file/fractures_file/leg_fractures',
    element: <Leg_Fractures />,
  },
  {
    path: '/gender/diseases/wounds_file/fractures_file/head_fractures',
    element: <Head_Fractures />,
  },
  {
    path: '/gender/diseases/acne_file',
    element: <Acne_File />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
