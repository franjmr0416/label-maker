import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
import { useAtomValue } from 'jotai'
import { labelContent } from '../jotai/jotai'
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
  const labelData = useAtomValue(labelContent)

  return (
    <Document>
      <Page size={'LETTER'} style={styles.page}>
        <View style={styles.section}>
          <Text>{JSON.stringify(labelData)}</Text>
        </View>
      </Page>
    </Document>
  )
}

export default NewDocument
