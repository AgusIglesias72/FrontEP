/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

// module.exports = {
//   env: {
//     AUTH_TIENDANUBE: 'bearer 12d9ddc340a968f3b8e356439c5e4b89d9290563',
//     AUTH_SHIPNOW: 'Bearer gIi15ZU5aL2W7UTmfXRmUp2DeiW_2h9vR_JozAGsruWK1hfyHA',
//     AUTH_MERCADOPAGO:
//       'Bearer APP_USR-5594695000263533-022418-3b24e78bbc8c7997dd1e92eb778a0955-701499356',
//     AUTH_MELI_REFRESH_TOKEN: 'TG-6329f6d25e955c0001a08f3a-701499356',
//     AUTH_MELI_CLIENT_SECRET: 'iBkFdpDj9fOhregmKmtmBkc4AfNPdBdX',
//     AUTH_MELI_CLIENT_ID: '7952883818443344',

//     GOOGLE_PRIVATE_KEY:
//       '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0VAjwJPk1e8aj\njSlGqhTQR37fgQJy8DNJy9xXbXp9NS2UGmRuPJDQQ09XXvEfhqmIfaYHzJkPYFfV\nqHtYVYGz1kArB+7Hr9KkfqxbEWW0P2TuDw9r5U1dtdr08rFVlPlA0QkjPuFE7CWx\nBOHkDacsf7+nZCPi0LjvtNPHl7r969bUPSBytGbN3TlvVpPlwkhkepIpt5UcV2Ov\nBQa4S0GkMZgYA51OzGgRTMcVmthBsh1I9kfKhKRRR0ZBwwgYWVZwmHBe7VnHX860\nFQSD0fq2ZQvQCOd6HqdsgpxQe3l/90UO46+XQzKHdQeGgHhVyup3m3M0le9b3iQl\neXZIplUNAgMBAAECggEAQk7mTHukAZUmiSxWgav35FBt6DyVjHMjwN6MAr/4ewLr\nZBrCVEDEFTiy+5MnQerv+wcM3rBOlfdcxO1jkas7esftJ4WOuXG/GIqV0RTYG4v2\nDo2OI6QZKzy8Kzb0m14gu0NCQ2oTRpc5EtsTPxsAHl5JOIGbqoMKheYtu6Zg9Y49\nkvhCeDRogYpzfHDWZkefsW+odAEggyZ65/3fjpyDBSP9GNfgTb91T9vVryafegEn\nMBW9dCnLbWT+2Uck6Wif/dm3GhxMXNF+KDxPwng7z5CcBLHQRCNyMXKoGliRJOiz\nbqwB0+Qt9cWFyugynjyavBTWsxbuJdJfsfsZi1cM5wKBgQDakTVRDsHak1JosmvC\nhDbA1nEwHKmbLyhrSw5fERQM4dr8JkSGzesn6FfC2seP2ihRXU0dyI53V2+mcdKv\n4afniRiF0fnMxg0qWUCuF9urtCn7GJsK//njKOrBlDSCrtf0PVhzcD7yvqgBC+zs\n3xWuvtypykooWS1yHVGzW8JagwKBgQDTNko3Lvi09/vfACWv9E1uwoxNiT9+2vWt\n8b8iBpl1G1PhvraoLR6ZJAgggNP856rCBctX6TUNe1qvDFNkXanWuqb2OM1Cnwdz\nwzDX4ytBnteXCr9mJbQze741XxcARuhAsa4+SI21Omzm3CjyhM7FfYFD/t0RCjzY\na3uxqze9LwKBgQDNMZwjgD5AjSTGBBOk52lb+zcCWzZj6Y8Bw9I3MBppybREG00k\nXbgSnE+gMLM/+yj00iou9vXBVsYMNjn9Q1XVymDKaYoiVCFSC77scpuaBKeRA9Wz\nKwQX3ncey5vMwIcf1mPu5IdEb/fcG60P6JQ7nRYfFTovzSEcTChCwbeiLwKBgFZf\nwE/67IiNVTpoBAGF5diixN+8ffPxtUDSOPjAPCdw6ofKB0aVVQsJei1YodiuIN3B\noturqh9+T6KAZuYHi7odkMPmjMJu6IxFyYawBvOJ8t547bbnOl9Hfoyy+2QIm1hB\nkWE1KIZxgzGR3Uj4WNrYrXFSG7OpPSLAKdCJlXzPAoGAXUgtYqnPZmK15jw9eP9K\nEjeGtkNa/U/fTfl0wMo/ITokpDPCUAkUZ9OFpGuO4ikZ1kWpT8S+b4reL8mlhIlV\nKVfEMEePCXGPB1Iyui2HLPPiwfdfR4aOOU87H0UAQgLJLXkFlXKrioVMzKAwL1Sv\n0h5EApLWJ1ppWQAKHSK3Vuc=\n-----END PRIVATE KEY-----\n',
//     GOOGLE_PRIVATE_KEY_ID: '45a329cc2df37cabe04ace6732831d19f08ec8b3',
//     GOOGLE_PROJECT_ID: 'gsscrapper-357117',
//     GOOGLE_CLIENT_ID: '102992806261436002078',
//     GOOGLE_CLIENT_EMAIL:
//       'enpalabrass@gsscrapper-357117.iam.gserviceaccount.com',
//     GOOGLE_CLIENT_CERT:
//       'https://www.googleapis.com/robot/v1/metadata/x509/enpalabrass%40gsscrapper-357117.iam.gserviceaccount.com',
//     GOOGLE_SPREADSHEET_ID: '1AFed1X05B8VtdnKX9o1ajSEjvn4-7fA92a8tQ7C7gpc',

//     GOOGLE_APPLICATION_CREDENTIALS: './DB/connections/cred.json',
//   },
// }
