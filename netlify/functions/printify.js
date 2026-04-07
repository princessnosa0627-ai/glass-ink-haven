const fetch = require('node-fetch');

exports.handler = async () => {
  // 🔥 PUT YOUR PRINTIFY API TOKEN HERE
  const API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImFmYjg5M2QxYTQxNTZhZGIxNDc5MTcwZGUyNDNlYTY5MTQyOGMzMDUxNzFjNTkwZGNlY2QyNjc2OTI4Yjc2MmRiNDk1MmQ0MzhkYmUxNmFhIiwiaWF0IjoxNzc1NTQ1NTIzLjQ0ODA2OSwibmJmIjoxNzc1NTQ1NTIzLjQ0ODA3MSwiZXhwIjoxODA3MDgxNTIzLjQ0MjMzMiwic3ViIjoiMjMzNjY2NzIiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIiwidXNlci5pbmZvIl19.nx0U6IJULwzBI_w6pL0FdQC4HnwPsVH_gn0wsB3wMbrHJxJUBDzX3FqSaRwTDOhQlJJpEHUpjm5Zu_9NAy9dt0BCE8HQ7BWdki-Uz9vWFubawCASlxVhf5ycjmzQzcsYbmKDmPJl6NhFZiwZidDwaL4Wcf_pjv1HGuIBMbzNdU4A_jle82xdZR8YmshBIoNnaj-TgqoDEHMDy7XGAvEYWyEnDrEa66MFC6goDRLPUBYdF93TUYPlOwsJGozBrrfRDTkgWdgd9JErXTuyZoBxOJUAPpPirKLRt-F6P4jkQ4g3UstvF7kU0KKZmGFzJ92aXUx1j4fp8r84IrNmz2R7SghaWnXB4Aef7XlvxhPKQL8pHSDSH2Jw44beepBE32ULTZQCY3ePNm12ZZPW_Qctp7ERQOqNCT7mWDK2YgA72CNehTSgmhGIZ0BLt9apMdM4e4FgqYTyWJtcsvOlsJ5uFfXbmkHpzZrn-ikmP95nmCi7NzUJYEaSbbwO8KiyjLax4mMCU6VXuoWBDEDRUtNQ1U1VGDgzNk5vIjXR9icRtjze6CM-vnMhMc8nYQTura_1ZRGJy4_qgboyM_anx-lAg25vFPgbNDtl9Z5rwlLmbM0g-Q91aibyoxKaCr6Di-MICHf4gHpUBaGcKsygTqb8BGsDgv3T99gjyafKCL6Ui3E' ;

  // 🔥 YOUR STORE ID
  const storeId = '24988605';

  try {
    const response = await fetch(`https://api.printify.com/v1/shops/${storeId}/products.json`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
