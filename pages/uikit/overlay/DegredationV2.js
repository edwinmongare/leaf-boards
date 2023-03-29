import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { format } from 'date-fns';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import AppTopbar from '../../../layout/AppTopbar';
import { apiDevUrl, apiProductionUrl } from '../../../apiConfig';

const DegredationV2 = () => {
 const [displayDegred1, setDisplayDegred1] = useState(false);

 const toast = useRef(null);
 const today = new Date();
 const formattedDate = format(today, 'yyyy-MM-dd HH:mm:ss');

 const validationSchemaMoistures = Yup.object().shape({
  CASE_NO: Yup.number().required('Case Number is required'),
  MOISTURE: Yup.number().required('Moisture data is required'),
  TEMPERATURE: Yup.number().required('Temperature data is required'),
  TIME_INSERTED: Yup.date().required('Time is required')
 });

 const formikMoistures = useFormik({
  initialValues: {
   CASE_NO: '',
   MOISTURE: '',
   TEMPERATURE: '',
   TIME_INSERTED: new Date()
  },
  validationSchema: validationSchemaMoistures,
  onSubmit: async (values, { setSubmitting, resetForm }) => {
   try {
    values.DATE = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    values.TIME_INSERTED = format(new Date(), 'yyyy-MM-dd HH:mm:ss'); // Set the current date and time
    const response = await axios.post(`${apiDevUrl}addMoistureData`, values);
    console.log(response, 'response from api');
    if (response.status === 200) {
     toast.current.show({
      severity: 'success',
      summary: 'Data succesfully submited',
      detail: 'The form data has been posted successfully',
      life: 10000
     });
     resetForm();
    }
   } catch (error) {
    console.log(error);
    toast.current.show({
     severity: 'error',
     summary: 'Error',
     detail: 'There was an error posting the data. Please try again',
     life: 10000
    });
    console.log(error, 'error');
   } finally {
    setSubmitting(false);
    setDisplayDegred1(false);
   }
  }
 });

 return (
  <>
   <AppTopbar pageTitle=" Data Entry Page" />
   <Toast ref={toast} />

   <div className="card shadow-3 col-12">
    <h5>Particle Size</h5>

    <Dialog
     header="Particle size distribution"
     visible={displayDegred1}
     style={{ width: '60vw' }}
     modal
     onHide={() => setDisplayDegred1(false)}
    >
     <form onSubmit={formikMoistures.handleSubmit}>
      <div className="grid">
       <div className="col-12 md:col-12">
        <div className="card p-fluid">
         <div className="field">
          <label htmlFor="TIME_INSERTED">Time</label>
          <InputText
           id="TIME_INSERTED"
           name="TIME_INSERTED"
           disabled
           placeholder={formattedDate}
           type="text"
          />
         </div>
         <label htmlFor="CASE_NO">EXIT 1st CC</label>
         <div className="field">
          <InputText
           id="CASE_NO"
           name="CASE_NO"
           value={formikMoistures.values.CASE_NO}
           onChange={formikMoistures.handleChange}
           placeholder={'Enter the EXIT 1st CC Number'}
           type="text"
          />
         </div>
         <div className="field">
          <label htmlFor="TEMPARTURE">TEMP_1st_CC</label>
          <InputText
           id="TEMPERATURE"
           name="TEMPERATURE"
           placeholder={'Enter the TEMP_1st_CC< Number'}
           className="field"
           value={formikMoistures.values.TEMPERATURE}
           onChange={formikMoistures.handleChange}
           type="text"
          />
         </div>
         <div className="field">
          <label htmlFor="MOISTURE">EXIT_2nd_CC</label>
          <InputText
           id="MOISTURE"
           name="MOISTURE"
           placeholder={'Enter the EXIT_2nd_CC Data'}
           className="field"
           value={formikMoistures.values.MOISTURE}
           onChange={formikMoistures.handleChange}
           type="text"
          />
         </div>
         <div className="field">
          <label htmlFor="MOISTURE">TEMP_2nd_CC</label>
          <InputText
           id="MOISTURE"
           name="MOISTURE"
           placeholder={'Enter the TEMP_2nd_CC Number'}
           className="field"
           value={formikMoistures.values.MOISTURE}
           onChange={formikMoistures.handleChange}
           type="text"
          />
         </div>
        </div>
       </div>
      </div>
      <Button
       className="border-double mt-4 border-4 border-sky-500 col-12 p-mt-2 p-button-primary"
       onClick={() => formikMoistures.handleSubmit()}
       icon="pi pi-check"
       disabled={formikMoistures.isSubmitting || !formikMoistures.isValid}
       type="submit"
       label="Submit"
      />
     </form>
    </Dialog>
    {console.log(formikMoistures.errors, 'jd2')}
    <div className="grid">
     <div className="col-12">
      <Button
       type="submit"
       label="Enter Data"
       icon="pi pi-external-link"
       onClick={() => setDisplayDegred1(true)}
      />
     </div>
    </div>
   </div>
  </>
 );
};

export default DegredationV2;
