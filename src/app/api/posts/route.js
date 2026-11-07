import { fetchServer } from "@/utils/fetchServer";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetchServer(`${process.env.BASE_URL_DEPLOY}/posts`, { method: 'GET' });
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(
            { error: true, message: 'Hubo un error con la data' },
            {status : 500}
        );
    }
}