import binascii
import os

''' #How to create 
filename = 'test.dat'
with open(filename, 'rb') as f:
    content = f.read()
print(binascii.hexlify(content))
print(bytes.fromhex('504f5354475245535f484f53543d686f73742e646f636b65722e696e7465726e616c0a504f5354475245535f504f52543d353433320a504f5354475245535f555345523d726f6f740a504f5354475245535f50415353574f52443d726f6f740a504f5354475245535f44415441424153455f4e414d453d7765625f64620a504f52543d333030300a4d4f44453d4445560a52554e5f4d4947524154494f4e533d74727565').decode('utf-8'))
 '''

print("############## Creating the Env file ##############")
with open(os.path.dirname(__file__) + '/../.env', 'w') as f:
    f.write(bytes.fromhex('504f5354475245535f484f53543d686f73742e646f636b65722e696e7465726e616c0a504f5354475245535f504f52543d353433320a504f5354475245535f555345523d726f6f740a504f5354475245535f50415353574f52443d726f6f740a504f5354475245535f44415441424153455f4e414d453d7765625f64620a504f52543d333030300a4d4f44453d4445560a52554e5f4d4947524154494f4e533d74727565').decode('utf-8'))
print("##############   Env file created    ##############")
