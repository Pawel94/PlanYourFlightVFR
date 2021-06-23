import React from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    display: "flex",
  },
});

const CreatePDF = ({ data }) => {
  console.log("data");
  console.log(data.length);

  console.log(typeof data);
  data.map((item) => {
    return console.log(item.distance);
  });

  return (
    <Document>
      <Page size="A4">
        <View>
          {data.map((item) => {
            let text = item.distance + " " + item.tas;
            return (
              <View>
                <Text style={styles.section}>{text}</Text>
                <Text>item.distance</Text>
              </View>
            );
          })}

          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

const PDFCreator = ({ data }) => {
  return (
    <div>
      <PDFDownloadLink
        document={<CreatePDF data={data} />}
        fileName="FlightPlan.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};
export default PDFCreator;
