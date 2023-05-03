import React from 'react';
import PDFFiles from '../Others/PDFFiles/PDFFiles';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Blogs = () => {
    return (
        <div>
            <PDFDownloadLink document={<PDFFiles />} fileName='blog'>
                {({ loading }) => (loading ? <button>loading document...</button> : <button className='btn btn-warning'>download</button>)}
            </PDFDownloadLink>
            <PDFFiles></PDFFiles>
        </div>
    );
};

export default Blogs;