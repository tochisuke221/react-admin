import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/launch";

const MyUrlField = ({source}: { source: string }) => {
    const record = useRecordContext();

    console.log(record)
    console.log("source:")
    console.log(source)


    return record ? (
        <Link href={record[source]} sx={{ textDecoration: "none" }}>
            {record[source]}
            <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
        </Link>
    ) : null;
}

export default MyUrlField;
