import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ConversationList from './Comp/ConversationList';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PdfRender = () => (
  <Document>
    <Page size="B5" style={styles.page}>
      <View style={styles.section}>{/* <ConversationList /> */}</View>
    </Page>
  </Document>
);

export default PdfRender;
