import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})
const NewDocument = () => {
  return (
    <Document>
      <Page size={'LETTER'} style={styles.page}>
        <View style={styles.section}>
          <Text>Prueba</Text>
        </View>
      </Page>
    </Document>
  )
}

export default NewDocument
