import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { useAuth } from '../contexts/authContext';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    marginBottom: 20,
    borderBottom: '2pt solid #000000',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1pt solid #cccccc',
    padding: 5,
  },
  itemText: {
    fontSize: 12,
  },
  qrCodeContainer: {
    position: 'absolute',
    top: 8,
    right: 20,
    width: 50,
    height: 50,
  },
  collectText: {
    textAlign: 'center',
  },
});

const Invoice = () => {
  const { cartItems, currentUser } = useAuth();

  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <View style={styles.header}>
                <Text style={styles.headerText}>Invoice</Text>
              </View>
              
              <View>
                {cartItems.map((item) => (
                  <View key={item.id} style={styles.itemRow}>
                    <Text style={styles.itemText}>{item.meal_name}</Text>
                    <Text style={styles.itemText}>{item.price}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.qrCodeContainer}>
              <Image src={`https://api.qrserver.com/v1/create-qr-code/?data=${currentUser.uid}&amp;size=100x100`} />
            </View>
            <View>
            <Text style={styles.collectText}>Collect your meal in 15 mins</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default Invoice;
