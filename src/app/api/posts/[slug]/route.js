import { NextResponse } from "next/server";
import {fetchServer} from "@/utils/fetchServer";

export async function GET(request, { params }) {
    try {
        const { slug } = await params;
        const response = await fetchServer(`${process.env.BASE_URL_DEPLOY}/posts/filter/?slug=${slug}`, { method: 'GET' });
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}