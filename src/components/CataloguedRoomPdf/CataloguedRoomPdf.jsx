import { useSelector } from 'react-redux';
import jsPDF from "jspdf";
import "jspdf-autotable";

import Button from '@material-ui/core/Button';


function CataloguedRoomPdf() {

    const rooms = useSelector((store) => store.room);

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Re-Cvr Report";
        const headers = [["NAME", "DESCRIPTION"]];

        const data = rooms.map(elt => [elt.room_name, elt.description]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("Rooms-report.pdf")
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

export default CataloguedRoomPdf;