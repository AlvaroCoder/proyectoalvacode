export async function fetchServer(
  url,
  { method = "GET", body = null, params = {} } = {},
) {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(body !== null ? { body: JSON.stringify(body) } : {}),
      cache: "no-store",
    });

    let json = null;
    try {
      json = await response.json();
    } catch (error) {
      console.error("Error parsing JSON response:", error);
      json = null;
    }
    return {
        ok: response.ok,
        status: response.status,
        data: json?.message ?? json,
        message: json?.status ?? "",
        error: !response.ok,
    };
}