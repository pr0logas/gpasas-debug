#!/usr/bin/env python3
from typing import Union

BASE45_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"
BASE45_DICT = {v: i for i, v in enumerate(BASE45_CHARSET)}

def b45encode(buf: bytes) -> bytes:
    res = ""
    buflen = len(buf)
    for i in range(0, buflen & ~1, 2):
        x = (buf[i] << 8) + buf[i + 1]
        e, x = divmod(x, 45 * 45)
        d, c = divmod(x, 45)
        res += BASE45_CHARSET[c] + BASE45_CHARSET[d] + BASE45_CHARSET[e]
    if buflen & 1:
        d, c = divmod(buf[-1], 45)
        res += BASE45_CHARSET[c] + BASE45_CHARSET[d]
    return res.encode()


def b45decode(s: Union[bytes, str]) -> bytes:
    """Decode base45-encoded string to bytes"""
    try:
        if isinstance(s, str):
            buf = [BASE45_DICT[c] for c in s.rstrip("\n")]
        elif isinstance(s, bytes):
            buf = [BASE45_DICT[c] for c in s.decode()]
        else:
            raise TypeError("Type must be 'str' or 'bytes'")

        buflen = len(buf)
        if buflen % 3 == 1:
            raise ValueError("Invalid base45 string")

        res = []
        for i in range(0, buflen, 3):
            if buflen - i >= 3:
                x = buf[i] + buf[i + 1] * 45 + buf[i + 2] * 45 * 45
                if x > 0xFFFF:
                    raise ValueError
                res.extend(divmod(x, 256))
            else:
                x = buf[i] + buf[i + 1] * 45
                if x > 0xFF:
                    raise ValueError
                res.append(x)
        return bytes(res)
    except (ValueError, KeyError, AttributeError):
        raise ValueError("Invalid base45 string")


# // From index.html source code:
#cert_pub_key = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8LnAER0q8iyuIG6yGNBE/8/hoDgrg0oq/ko0vLsmJWMzop31VTbT5uZe0oivYTFaa/g1DXHhWYzS3ld85d8BzCT46ySMI2WkDKEwGLLZg6Fe+bKzd+Zr6hg5+Oss+CNt9d3O4EdXgsDF2UcZeZd1o/waKyVAaXN9hhBimPqz00tMyGknSy1lhl5Moom6+DKqRg2eNb1bYoFTEiDXEcfuq8xxYEYNSAjdcl/DRJ7pPnM+FlAC4uPXnVYNzAXmCQD4l8zY7SccZvxfc0NAOBVuTBn2pA/yD/GsOli1a6Gi38dGCo7syjyvm/tT/anSHiIC4DClthvDlKGNB4VDcjPvXwIDAQAB'
# //


#full_hash_example = '138$MPFW.CWE49F4IY8.HA.MA3Q5%VDWE49F4IY8.HA7C96C9IE4RF45EF2G7OA7X962G4UUE2G7F%63R61A64:65:6EL63Q5+ED:OE2G7E%6KA74R6FL65:6EL63Q5UUEWF7W1DZ2P*4D5T9LPE/7HGNTNN0+NTD9LXBP3SX8F55KJB1O8UP2T:RKSIJ8TJP$3$ 80/J55SPMMT9PXN32BDJ*O8WIP:2W63VG0 RJBARU:2-E61TTYJQ7I3K+43LFAI32JHU217FASFPI65S5BYFBV%A J0/MLZ+MCEHHM3+6BUZMCT34BT 86+S5YM21NM4-6*MCL:M0WR7:H:SR6P27QII%4+YMJKT7Y5GS6CR3$/8M*T//7G1T1HMX7S2K7 0842PGH41Q7J2IIBU5753PB/NUIKHQFF-+36S1$1WONJS8DF9B*I3Y0B*9W7*UJI0LG5C:JHESFVKZ%8$+P*ARLWFXHPM%UZ.F4M2FEDMDV9+LHMP$LFHQ8L7G8QB6+SPLK9HO'
#header = '138'
#seperator = '$'
#payload = 'MPFW.CWE49F4IY8.HA.MA3Q5%VDWE49F4IY8.HA7C96C9IE4RF45EF2G7OA7X962G4UUE2G7F%63R61A64:65:6EL63Q5+ED:OE2G7E%6KA74R6FL65:6EL63Q5UUEWF7W1DZ2'
#signature = 'P*4D5T9LPE/7HGNTNN0+NTD9LXBP3SX8F55KJB1O8UP2T:RKSIJ8TJP$3$ 80/J55SPMMT9PXN32BDJ*O8WIP:2W63VG0 RJBARU:2-E61TTYJQ7I3K+43LFAI32JHU217FASFPI65S5BYFBV%A J0/MLZ+MCEHHM3+6BUZMCT34BT 86+S5YM21NM4-6*MCL:M0WR7:H:SR6P27QII%4+YMJKT7Y5GS6CR3$/8M*T//7G1T1HMX7S2K7 0842PGH41Q7J2IIBU5753PB/NUIKHQFF-+36S1$1WONJS8DF9B*I3Y0B*9W7*UJI0LG5C:JHESFVKZ%8$+P*ARLWFXHPM%UZ.F4M2FEDMDV9+LHMP$LFHQ8L7G8QB6+SPLK9HO'

# Decoding Payload
payload = 'MPFW.CWE49F4IY8.HA.MA3Q5%VDWE49F4IY8.HA7C96C9IE4RF45EF2G7OA7X962G4UUE2G7F%63R61A64:65:6EL63Q5+ED:OE2G7E%6KA74R6FL65:6EL63Q5UUEWF7W1DZ2'
print("Decoding the payload: (user information from base45)")
print(b45decode(payload))
print("")

# Encoding Payload
print("Encoding the payload: (user information to base45)")
create_new_person_payload = b'{"fn":"PETRAS","ln":"PETRAITIS","by":1991,"vt":1634819767735,"iss":1629549367735,"t":"g"}'
print(b45encode(create_new_person_payload))
