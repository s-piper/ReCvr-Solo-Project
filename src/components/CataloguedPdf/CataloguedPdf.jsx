import { useSelector } from 'react-redux';
import jsPDF from "jspdf";
import "jspdf-autotable";

import Button from '@material-ui/core/Button';


function CataloguedPdf() {

    const items = useSelector((store) => store.item);

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Re-Cvr Report";
        const headers = [["NAME", "BRAND", "MODEL", "PHOTO"]];

        const data = items.map(elt => [elt.name, elt.brand, elt.model, elt.upload]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("items-report.pdf")
    }

    return (
        <div>
            <Button onClick={exportPDF}
                variant="contained"
                color="primary"
            >Generate Report
            </Button>
        </div>
    )
}

export default CataloguedPdf;