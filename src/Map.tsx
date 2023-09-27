import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
    Plane_1: THREE.Mesh;
    AREA_FLOOR_PINK: THREE.Mesh;
    Object_186036: THREE.Mesh;
    Object_186037: THREE.Mesh;
    Object_186019: THREE.Mesh;
    Object_186020: THREE.Mesh;
    OFFICE_1: THREE.Mesh;
    Top1: THREE.Mesh;
    Top2: THREE.Mesh;
    OFFICE_1002: THREE.Mesh;
    Cube049: THREE.Mesh;
    Cube050: THREE.Mesh;
    TreeTrunk035: THREE.Mesh;
    Object_186086: THREE.Mesh;
    Object_186087: THREE.Mesh;
    Object_186088: THREE.Mesh;
    TreeTrunk039: THREE.Mesh;
    Object_186092: THREE.Mesh;
    TreeTrunk036: THREE.Mesh;
    Object_186089: THREE.Mesh;
    HOSPITAL004: THREE.Mesh;
    HOSPITAL005: THREE.Mesh;
    Cube052: THREE.Mesh;
    Cube054: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Top3012: THREE.Mesh;
    Top3013: THREE.Mesh;
    Top3014: THREE.Mesh;
    Top3015: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube034: THREE.Mesh;
    OFFICE_1001: THREE.Mesh;
    Top3: THREE.Mesh;
    Top3001: THREE.Mesh;
    Top3002: THREE.Mesh;
    Top3003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cylinder010: THREE.Mesh;
    Cube024: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Cube036: THREE.Mesh;
    Cube038: THREE.Mesh;
    LIBRARY_WORDING: THREE.Mesh;
    Cube039: THREE.Mesh;
    Cube040: THREE.Mesh;
    realisticbench013: THREE.Mesh;
    realisticbench014: THREE.Mesh;
    LIBRARY_BOOL: THREE.Mesh;
    TreeTrunk033: THREE.Mesh;
    Object_186017: THREE.Mesh;
    TreeTrunk030: THREE.Mesh;
    Object_186081: THREE.Mesh;
    TreeTrunk031: THREE.Mesh;
    Object_186082: THREE.Mesh;
    TreeTrunk028: THREE.Mesh;
    Object_186034: THREE.Mesh;
    TreeTrunk029: THREE.Mesh;
    Object_186018: THREE.Mesh;
    Object_186035: THREE.Mesh;
    Object_186084: THREE.Mesh;
    TreeTrunk032: THREE.Mesh;
    Object_186083: THREE.Mesh;
    Cube041: THREE.Mesh;
    Cylinder013: THREE.Mesh;
    Cylinder014: THREE.Mesh;
    Cylinder015: THREE.Mesh;
    Cylinder016: THREE.Mesh;
    Cylinder017: THREE.Mesh;
    TreeTrunk034: THREE.Mesh;
    Object_186032: THREE.Mesh;
    TreeTrunk038: THREE.Mesh;
    Object_186085: THREE.Mesh;
    TreeTrunk040: THREE.Mesh;
    Object_186090: THREE.Mesh;
    TreeTrunk042: THREE.Mesh;
    Object_186093: THREE.Mesh;
    AREA_FLOOR_BLUE: THREE.Mesh;
    OFFICE_4: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    OFFICE_5: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube058: THREE.Mesh;
    Cube058_1: THREE.Mesh;
    Cube043: THREE.Mesh;
    Text001: THREE.Mesh;
    Circle: THREE.Mesh;
    Cube068: THREE.Mesh;
    Cube068_1: THREE.Mesh;
    realisticbench001: THREE.Mesh;
    realisticbench002: THREE.Mesh;
    realisticbench003: THREE.Mesh;
    realisticbench004: THREE.Mesh;
    Cylinder018: THREE.Mesh;
    Curve: THREE.Mesh;
    TreeTrunk023: THREE.Mesh;
    Object_186046: THREE.Mesh;
    TreeTrunk027: THREE.Mesh;
    Object_186002: THREE.Mesh;
    TreeTrunk024: THREE.Mesh;
    Object_186079: THREE.Mesh;
    TreeTrunk026: THREE.Mesh;
    Object_186001: THREE.Mesh;
    TreeTrunk025: THREE.Mesh;
    Object_186080: THREE.Mesh;
    Cube077: THREE.Mesh;
    Cube077_1: THREE.Mesh;
    Cube047: THREE.Mesh;
    Cube048: THREE.Mesh;
    Object_186047: THREE.Mesh;
    Object_186048: THREE.Mesh;
    TreeTrunk021: THREE.Mesh;
    Object_186008: THREE.Mesh;
    TreeTrunk022: THREE.Mesh;
    Object_186078: THREE.Mesh;
    AREA_FLOOR_VIOLET: THREE.Mesh;
    Cylinder005_1: THREE.Mesh;
    Cylinder005_2: THREE.Mesh;
    Cylinder006_1: THREE.Mesh;
    Cylinder006_2: THREE.Mesh;
    Cylinder007: THREE.Mesh;
    Cylinder008: THREE.Mesh;
    Table1: THREE.Mesh;
    CHAIR: THREE.Mesh;
    CHAIR001: THREE.Mesh;
    CHAIR002: THREE.Mesh;
    Cube044: THREE.Mesh;
    Table1001: THREE.Mesh;
    CHAIR003: THREE.Mesh;
    CHAIR004: THREE.Mesh;
    CHAIR005: THREE.Mesh;
    Cube045: THREE.Mesh;
    NERO_LOGO: THREE.Mesh;
    Curve005: THREE.Mesh;
    Cube036_1: THREE.Mesh;
    Cube036_2: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube022: THREE.Mesh;
    path770: THREE.Mesh;
    path774: THREE.Mesh;
    path778: THREE.Mesh;
    path782: THREE.Mesh;
    path784: THREE.Mesh;
    path786: THREE.Mesh;
    path790: THREE.Mesh;
    path794: THREE.Mesh;
    Cube038_1: THREE.Mesh;
    Cube038_2: THREE.Mesh;
    CINEMA_1001: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cylinder009: THREE.Mesh;
    Cylinder020: THREE.Mesh;
    Cylinder021: THREE.Mesh;
    Cylinder022: THREE.Mesh;
    Cylinder023: THREE.Mesh;
    Cylinder024: THREE.Mesh;
    Mesh001: THREE.Mesh;
    Mesh001_1: THREE.Mesh;
    Curve001: THREE.Mesh;
    Curve003: THREE.Mesh;
    path0: THREE.Mesh;
    TreeTrunk037: THREE.Mesh;
    Object_186033: THREE.Mesh;
    Object_186049: THREE.Mesh;
    Object_186091: THREE.Mesh;
    Object_186094: THREE.Mesh;
    TreeTrunk041: THREE.Mesh;
    Object_186038: THREE.Mesh;
    TreeTrunk043: THREE.Mesh;
    Object_186039: THREE.Mesh;
    AREA_FLOOR_GREEN: THREE.Mesh;
    HOUSE_1: THREE.Mesh;
    Cube011: THREE.Mesh;
    HOUSE_2: THREE.Mesh;
    Cube023: THREE.Mesh;
    HOUSE_3: THREE.Mesh;
    Cube025: THREE.Mesh;
    Cube053: THREE.Mesh;
    Cube053_1: THREE.Mesh;
    Cube027: THREE.Mesh;
    Cube028: THREE.Mesh;
    Cube029: THREE.Mesh;
    Cube030: THREE.Mesh;
    Cube031: THREE.Mesh;
    Cube061: THREE.Mesh;
    Cube061_1: THREE.Mesh;
    Cube033: THREE.Mesh;
    HOUSE_4: THREE.Mesh;
    Cube037: THREE.Mesh;
    TreeTrunk044: THREE.Mesh;
    Object_186040: THREE.Mesh;
    TreeTrunk045: THREE.Mesh;
    Object_186041: THREE.Mesh;
    TreeTrunk047: THREE.Mesh;
    Object_186014: THREE.Mesh;
    TreeTrunk049: THREE.Mesh;
    Object_186044: THREE.Mesh;
    TreeTrunk046: THREE.Mesh;
    Object_186042: THREE.Mesh;
    TreeTrunk048: THREE.Mesh;
    Object_186015: THREE.Mesh;
    Object_186016: THREE.Mesh;
    Object_186043: THREE.Mesh;
    realisticbench009: THREE.Mesh;
    realisticbench010: THREE.Mesh;
    realisticbench011: THREE.Mesh;
    realisticbench012: THREE.Mesh;
    Cylinder019: THREE.Mesh;
    REED001: THREE.Mesh;
    REED002: THREE.Mesh;
    REED003: THREE.Mesh;
    REED001_1: THREE.Mesh;
    REED002_1: THREE.Mesh;
    REED003_1: THREE.Mesh;
    REED001_2: THREE.Mesh;
    REED002_2: THREE.Mesh;
    REED003_2: THREE.Mesh;
    REED001_3: THREE.Mesh;
    REED002_3: THREE.Mesh;
    REED003_3: THREE.Mesh;
    REED001_4: THREE.Mesh;
    REED002_4: THREE.Mesh;
    REED003_4: THREE.Mesh;
    REED001_5: THREE.Mesh;
    REED002_5: THREE.Mesh;
    REED003_5: THREE.Mesh;
    REED001_6: THREE.Mesh;
    REED002_6: THREE.Mesh;
    REED003_6: THREE.Mesh;
    REED001_7: THREE.Mesh;
    REED002_7: THREE.Mesh;
    REED003_7: THREE.Mesh;
    REED001_8: THREE.Mesh;
    REED002_8: THREE.Mesh;
    REED003_8: THREE.Mesh;
    REED001_9: THREE.Mesh;
    REED002_9: THREE.Mesh;
    REED003_9: THREE.Mesh;
    REED001_10: THREE.Mesh;
    REED002_10: THREE.Mesh;
    REED003_10: THREE.Mesh;
    REED001_11: THREE.Mesh;
    REED002_11: THREE.Mesh;
    REED003_11: THREE.Mesh;
    REED001_12: THREE.Mesh;
    REED002_12: THREE.Mesh;
    REED003_12: THREE.Mesh;
    REED001_13: THREE.Mesh;
    REED002_13: THREE.Mesh;
    REED003_13: THREE.Mesh;
    REED001_14: THREE.Mesh;
    REED002_14: THREE.Mesh;
    REED003_14: THREE.Mesh;
    REED001_15: THREE.Mesh;
    REED002_15: THREE.Mesh;
    REED003_15: THREE.Mesh;
    REED001_16: THREE.Mesh;
    REED002_16: THREE.Mesh;
    REED003_16: THREE.Mesh;
    REED001_17: THREE.Mesh;
    REED002_17: THREE.Mesh;
    REED003_17: THREE.Mesh;
    REED001_18: THREE.Mesh;
    REED002_18: THREE.Mesh;
    REED003_18: THREE.Mesh;
    REED001_19: THREE.Mesh;
    REED002_19: THREE.Mesh;
    REED003_19: THREE.Mesh;
    REED001_20: THREE.Mesh;
    REED002_20: THREE.Mesh;
    REED003_20: THREE.Mesh;
    REED001_21: THREE.Mesh;
    REED002_21: THREE.Mesh;
    REED003_21: THREE.Mesh;
    REED001_22: THREE.Mesh;
    REED002_22: THREE.Mesh;
    REED003_22: THREE.Mesh;
    REED001_23: THREE.Mesh;
    REED002_23: THREE.Mesh;
    REED003_23: THREE.Mesh;
    REED001_24: THREE.Mesh;
    REED002_24: THREE.Mesh;
    REED003_24: THREE.Mesh;
    REED001_25: THREE.Mesh;
    REED002_25: THREE.Mesh;
    REED003_25: THREE.Mesh;
    REED001_26: THREE.Mesh;
    REED002_26: THREE.Mesh;
    REED003_26: THREE.Mesh;
    REED001_27: THREE.Mesh;
    REED002_27: THREE.Mesh;
    REED003_27: THREE.Mesh;
    REED001_28: THREE.Mesh;
    REED002_28: THREE.Mesh;
    REED003_28: THREE.Mesh;
    REED001_29: THREE.Mesh;
    REED002_29: THREE.Mesh;
    REED003_29: THREE.Mesh;
    REED001_30: THREE.Mesh;
    REED002_30: THREE.Mesh;
    REED003_30: THREE.Mesh;
    REED001_31: THREE.Mesh;
    REED002_31: THREE.Mesh;
    REED003_31: THREE.Mesh;
    REED001_32: THREE.Mesh;
    REED002_32: THREE.Mesh;
    REED003_32: THREE.Mesh;
    REED001_33: THREE.Mesh;
    REED002_33: THREE.Mesh;
    REED003_33: THREE.Mesh;
    REED001_34: THREE.Mesh;
    REED002_34: THREE.Mesh;
    REED003_34: THREE.Mesh;
    REED001_35: THREE.Mesh;
    REED002_35: THREE.Mesh;
    REED003_35: THREE.Mesh;
    REED001_36: THREE.Mesh;
    REED002_36: THREE.Mesh;
    REED003_36: THREE.Mesh;
    REED001_37: THREE.Mesh;
    REED002_37: THREE.Mesh;
    REED003_37: THREE.Mesh;
    REED001_38: THREE.Mesh;
    REED002_38: THREE.Mesh;
    REED003_38: THREE.Mesh;
    REED001_39: THREE.Mesh;
    REED002_39: THREE.Mesh;
    REED003_39: THREE.Mesh;
    REED001_40: THREE.Mesh;
    REED002_40: THREE.Mesh;
    REED003_40: THREE.Mesh;
    REED001_41: THREE.Mesh;
    REED002_41: THREE.Mesh;
    REED003_41: THREE.Mesh;
    REED001_42: THREE.Mesh;
    REED002_42: THREE.Mesh;
    REED003_42: THREE.Mesh;
    REED001_43: THREE.Mesh;
    REED002_43: THREE.Mesh;
    REED003_43: THREE.Mesh;
    REED001_44: THREE.Mesh;
    REED002_44: THREE.Mesh;
    REED003_44: THREE.Mesh;
    REED001_45: THREE.Mesh;
    REED002_45: THREE.Mesh;
    REED003_45: THREE.Mesh;
    REED001_46: THREE.Mesh;
    REED002_46: THREE.Mesh;
    REED003_46: THREE.Mesh;
    REED001_47: THREE.Mesh;
    REED002_47: THREE.Mesh;
    REED003_47: THREE.Mesh;
    REED001_48: THREE.Mesh;
    REED002_48: THREE.Mesh;
    REED003_48: THREE.Mesh;
    REED001_49: THREE.Mesh;
    REED002_49: THREE.Mesh;
    REED003_49: THREE.Mesh;
    REED001_50: THREE.Mesh;
    REED002_50: THREE.Mesh;
    REED003_50: THREE.Mesh;
    REED001_51: THREE.Mesh;
    REED002_51: THREE.Mesh;
    REED003_51: THREE.Mesh;
    REED001_52: THREE.Mesh;
    REED002_52: THREE.Mesh;
    REED003_52: THREE.Mesh;
    REED001_53: THREE.Mesh;
    REED002_53: THREE.Mesh;
    REED003_53: THREE.Mesh;
    REED001_54: THREE.Mesh;
    REED002_54: THREE.Mesh;
    REED003_54: THREE.Mesh;
    REED001_55: THREE.Mesh;
    REED002_55: THREE.Mesh;
    REED003_55: THREE.Mesh;
    REED001_56: THREE.Mesh;
    REED002_56: THREE.Mesh;
    REED003_56: THREE.Mesh;
    REED001_57: THREE.Mesh;
    REED002_57: THREE.Mesh;
    REED003_57: THREE.Mesh;
    REED001_58: THREE.Mesh;
    REED002_58: THREE.Mesh;
    REED003_58: THREE.Mesh;
    REED001_59: THREE.Mesh;
    REED002_59: THREE.Mesh;
    REED003_59: THREE.Mesh;
    REED001_60: THREE.Mesh;
    REED002_60: THREE.Mesh;
    REED003_60: THREE.Mesh;
    REED001_61: THREE.Mesh;
    REED002_61: THREE.Mesh;
    REED003_61: THREE.Mesh;
    REED001_62: THREE.Mesh;
    REED002_62: THREE.Mesh;
    REED003_62: THREE.Mesh;
    REED001_63: THREE.Mesh;
    REED002_63: THREE.Mesh;
    REED003_63: THREE.Mesh;
    REED001_64: THREE.Mesh;
    REED002_64: THREE.Mesh;
    REED003_64: THREE.Mesh;
    REED001_65: THREE.Mesh;
    REED002_65: THREE.Mesh;
    REED003_65: THREE.Mesh;
    REED001_66: THREE.Mesh;
    REED002_66: THREE.Mesh;
    REED003_66: THREE.Mesh;
    REED001_67: THREE.Mesh;
    REED002_67: THREE.Mesh;
    REED003_67: THREE.Mesh;
    REED001_68: THREE.Mesh;
    REED002_68: THREE.Mesh;
    REED003_68: THREE.Mesh;
    REED001_69: THREE.Mesh;
    REED002_69: THREE.Mesh;
    REED003_69: THREE.Mesh;
    REED001_70: THREE.Mesh;
    REED002_70: THREE.Mesh;
    REED003_70: THREE.Mesh;
    REED001_71: THREE.Mesh;
    REED002_71: THREE.Mesh;
    REED003_71: THREE.Mesh;
    REED001_72: THREE.Mesh;
    REED002_72: THREE.Mesh;
    REED003_72: THREE.Mesh;
    REED001_73: THREE.Mesh;
    REED002_73: THREE.Mesh;
    REED003_73: THREE.Mesh;
    REED001_74: THREE.Mesh;
    REED002_74: THREE.Mesh;
    REED003_74: THREE.Mesh;
    REED001_75: THREE.Mesh;
    REED002_75: THREE.Mesh;
    REED003_75: THREE.Mesh;
    REED001_76: THREE.Mesh;
    REED002_76: THREE.Mesh;
    REED003_76: THREE.Mesh;
    REED001_77: THREE.Mesh;
    REED002_77: THREE.Mesh;
    REED003_77: THREE.Mesh;
    REED001_78: THREE.Mesh;
    REED002_78: THREE.Mesh;
    REED003_78: THREE.Mesh;
    REED001_79: THREE.Mesh;
    REED002_79: THREE.Mesh;
    REED003_79: THREE.Mesh;
    REED001_80: THREE.Mesh;
    REED002_80: THREE.Mesh;
    REED003_80: THREE.Mesh;
    REED001_81: THREE.Mesh;
    REED002_81: THREE.Mesh;
    REED003_81: THREE.Mesh;
    REED001_82: THREE.Mesh;
    REED002_82: THREE.Mesh;
    REED003_82: THREE.Mesh;
    REED001_83: THREE.Mesh;
    REED002_83: THREE.Mesh;
    REED003_83: THREE.Mesh;
    REED001_84: THREE.Mesh;
    REED002_84: THREE.Mesh;
    REED003_84: THREE.Mesh;
    REED001_85: THREE.Mesh;
    REED002_85: THREE.Mesh;
    REED003_85: THREE.Mesh;
    REED001_86: THREE.Mesh;
    REED002_86: THREE.Mesh;
    REED003_86: THREE.Mesh;
    REED001_87: THREE.Mesh;
    REED002_87: THREE.Mesh;
    REED003_87: THREE.Mesh;
    REED001_88: THREE.Mesh;
    REED002_88: THREE.Mesh;
    REED003_88: THREE.Mesh;
    REED001_89: THREE.Mesh;
    REED002_89: THREE.Mesh;
    REED003_89: THREE.Mesh;
    REED001_90: THREE.Mesh;
    REED002_90: THREE.Mesh;
    REED003_90: THREE.Mesh;
    REED001_91: THREE.Mesh;
    REED002_91: THREE.Mesh;
    REED003_91: THREE.Mesh;
    REED001_92: THREE.Mesh;
    REED002_92: THREE.Mesh;
    REED003_92: THREE.Mesh;
    REED001_93: THREE.Mesh;
    REED002_93: THREE.Mesh;
    REED003_93: THREE.Mesh;
    REED001_94: THREE.Mesh;
    REED002_94: THREE.Mesh;
    REED003_94: THREE.Mesh;
    REED001_95: THREE.Mesh;
    REED002_95: THREE.Mesh;
    REED003_95: THREE.Mesh;
    REED001_96: THREE.Mesh;
    REED002_96: THREE.Mesh;
    REED003_96: THREE.Mesh;
    REED001_97: THREE.Mesh;
    REED002_97: THREE.Mesh;
    REED003_97: THREE.Mesh;
    REED001_98: THREE.Mesh;
    REED002_98: THREE.Mesh;
    REED003_98: THREE.Mesh;
    REED001_99: THREE.Mesh;
    REED002_99: THREE.Mesh;
    REED003_99: THREE.Mesh;
    REED001_100: THREE.Mesh;
    REED002_100: THREE.Mesh;
    REED003_100: THREE.Mesh;
    REED001_101: THREE.Mesh;
    REED002_101: THREE.Mesh;
    REED003_101: THREE.Mesh;
    REED001_102: THREE.Mesh;
    REED002_102: THREE.Mesh;
    REED003_102: THREE.Mesh;
    REED001_103: THREE.Mesh;
    REED002_103: THREE.Mesh;
    REED003_103: THREE.Mesh;
    REED001_104: THREE.Mesh;
    REED002_104: THREE.Mesh;
    REED003_104: THREE.Mesh;
    REED001_105: THREE.Mesh;
    REED002_105: THREE.Mesh;
    REED003_105: THREE.Mesh;
    REED001_106: THREE.Mesh;
    REED002_106: THREE.Mesh;
    REED003_106: THREE.Mesh;
    REED001_107: THREE.Mesh;
    REED002_107: THREE.Mesh;
    REED003_107: THREE.Mesh;
    REED001_108: THREE.Mesh;
    REED002_108: THREE.Mesh;
    REED003_108: THREE.Mesh;
    REED001_109: THREE.Mesh;
    REED002_109: THREE.Mesh;
    REED003_109: THREE.Mesh;
    REED001_110: THREE.Mesh;
    REED002_110: THREE.Mesh;
    REED003_110: THREE.Mesh;
    REED001_111: THREE.Mesh;
    REED002_111: THREE.Mesh;
    REED003_111: THREE.Mesh;
    REED001_112: THREE.Mesh;
    REED002_112: THREE.Mesh;
    REED003_112: THREE.Mesh;
    REED001_113: THREE.Mesh;
    REED002_113: THREE.Mesh;
    REED003_113: THREE.Mesh;
    REED001_114: THREE.Mesh;
    REED002_114: THREE.Mesh;
    REED003_114: THREE.Mesh;
    REED001_115: THREE.Mesh;
    REED002_115: THREE.Mesh;
    REED003_115: THREE.Mesh;
    REED001_116: THREE.Mesh;
    REED002_116: THREE.Mesh;
    REED003_116: THREE.Mesh;
    REED001_117: THREE.Mesh;
    REED002_117: THREE.Mesh;
    REED003_117: THREE.Mesh;
    REED001_118: THREE.Mesh;
    REED002_118: THREE.Mesh;
    REED003_118: THREE.Mesh;
    REED001_119: THREE.Mesh;
    REED002_119: THREE.Mesh;
    REED003_119: THREE.Mesh;
    REED001_120: THREE.Mesh;
    REED002_120: THREE.Mesh;
    REED003_120: THREE.Mesh;
    REED001_121: THREE.Mesh;
    REED002_121: THREE.Mesh;
    REED003_121: THREE.Mesh;
    REED001_122: THREE.Mesh;
    REED002_122: THREE.Mesh;
    REED003_122: THREE.Mesh;
    REED001_123: THREE.Mesh;
    REED002_123: THREE.Mesh;
    REED003_123: THREE.Mesh;
    REED001_124: THREE.Mesh;
    REED002_124: THREE.Mesh;
    REED003_124: THREE.Mesh;
    REED001_125: THREE.Mesh;
    REED002_125: THREE.Mesh;
    REED003_125: THREE.Mesh;
    REED001_126: THREE.Mesh;
    REED002_126: THREE.Mesh;
    REED003_126: THREE.Mesh;
    REED001_127: THREE.Mesh;
    REED002_127: THREE.Mesh;
    REED003_127: THREE.Mesh;
    REED001_128: THREE.Mesh;
    REED002_128: THREE.Mesh;
    REED003_128: THREE.Mesh;
    REED001_129: THREE.Mesh;
    REED002_129: THREE.Mesh;
    REED003_129: THREE.Mesh;
    REED001_130: THREE.Mesh;
    REED002_130: THREE.Mesh;
    REED003_130: THREE.Mesh;
    REED001_131: THREE.Mesh;
    REED002_131: THREE.Mesh;
    REED003_131: THREE.Mesh;
    REED001_132: THREE.Mesh;
    REED002_132: THREE.Mesh;
    REED003_132: THREE.Mesh;
    REED001_133: THREE.Mesh;
    REED002_133: THREE.Mesh;
    REED003_133: THREE.Mesh;
    REED001_134: THREE.Mesh;
    REED002_134: THREE.Mesh;
    REED003_134: THREE.Mesh;
    REED001_135: THREE.Mesh;
    REED002_135: THREE.Mesh;
    REED003_135: THREE.Mesh;
    REED001_136: THREE.Mesh;
    REED002_136: THREE.Mesh;
    REED003_136: THREE.Mesh;
    REED001_137: THREE.Mesh;
    REED002_137: THREE.Mesh;
    REED003_137: THREE.Mesh;
    REED001_138: THREE.Mesh;
    REED002_138: THREE.Mesh;
    REED003_138: THREE.Mesh;
    REED001_139: THREE.Mesh;
    REED002_139: THREE.Mesh;
    REED003_139: THREE.Mesh;
    REED001_140: THREE.Mesh;
    REED002_140: THREE.Mesh;
    REED003_140: THREE.Mesh;
    REED001_141: THREE.Mesh;
    REED002_141: THREE.Mesh;
    REED003_141: THREE.Mesh;
    REED001_142: THREE.Mesh;
    REED002_142: THREE.Mesh;
    REED003_142: THREE.Mesh;
    REED001_143: THREE.Mesh;
    REED002_143: THREE.Mesh;
    REED003_143: THREE.Mesh;
    REED001_144: THREE.Mesh;
    REED002_144: THREE.Mesh;
    Cube017_1: THREE.Mesh;
    Cube017_2: THREE.Mesh;
    Cube018_1: THREE.Mesh;
    Cube018_2: THREE.Mesh;
    TreeTrunk011: THREE.Mesh;
    Object_186073: THREE.Mesh;
    TreeTrunk009: THREE.Mesh;
    Object_186003: THREE.Mesh;
    TreeTrunk016: THREE.Mesh;
    Object_186012: THREE.Mesh;
    TreeTrunk010: THREE.Mesh;
    Object_186005: THREE.Mesh;
    TreeTrunk012: THREE.Mesh;
    Object_186004: THREE.Mesh;
    TreeTrunk014: THREE.Mesh;
    Object_186075: THREE.Mesh;
    TreeTrunk013: THREE.Mesh;
    Object_186074: THREE.Mesh;
    TreeTrunk015: THREE.Mesh;
    Object_186013: THREE.Mesh;
    TreeTrunk019: THREE.Mesh;
    Object_186006: THREE.Mesh;
    TreeTrunk017: THREE.Mesh;
    Object_186076: THREE.Mesh;
    TreeTrunk020: THREE.Mesh;
    Object_186007: THREE.Mesh;
    TreeTrunk018: THREE.Mesh;
    Object_186077: THREE.Mesh;
    Cube020_1: THREE.Mesh;
    Cube020_2: THREE.Mesh;
    Object_186021: THREE.Mesh;
    Object_186022: THREE.Mesh;
    Object_186023: THREE.Mesh;
    Object_186024: THREE.Mesh;
    Object_186025: THREE.Mesh;
    Object_186026: THREE.Mesh;
    Object_186027: THREE.Mesh;
    Object_186028: THREE.Mesh;
    Object_186029: THREE.Mesh;
    Object_186030: THREE.Mesh;
    Object_186031: THREE.Mesh;
    Object_186103: THREE.Mesh;
    Object_186104: THREE.Mesh;
    Object_186105: THREE.Mesh;
    REED001_145: THREE.Mesh;
    REED002_145: THREE.Mesh;
    REED003_144: THREE.Mesh;
    Soccer_Field_0: THREE.Mesh;
    Soccer_Field_1: THREE.Mesh;
    Soccer_Goal_0: THREE.Mesh;
    Soccer_Goal_1: THREE.Mesh;
    Soccer_Goal001_0: THREE.Mesh;
    Soccer_Goal001_1: THREE.Mesh;
    realisticbench: THREE.Mesh;
    realisticbench005: THREE.Mesh;
    realisticbench006: THREE.Mesh;
    realisticbench007: THREE.Mesh;
    realisticbench008: THREE.Mesh;
    TreeTrunk004: THREE.Mesh;
    Object_186010: THREE.Mesh;
    TreeTrunk006: THREE.Mesh;
    Object_186071: THREE.Mesh;
    TreeTrunk005: THREE.Mesh;
    Object_186070: THREE.Mesh;
    TreeTrunk008: THREE.Mesh;
    Object_186072: THREE.Mesh;
    TreeTrunk007: THREE.Mesh;
    Object_186045: THREE.Mesh;
    TreeTrunk002: THREE.Mesh;
    Object_186011: THREE.Mesh;
    TreeTrunk003: THREE.Mesh;
    Object_186069: THREE.Mesh;
    TreeTrunk001: THREE.Mesh;
    Object_186009: THREE.Mesh;
    Curve004: THREE.Mesh;
    Curve006: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Exercising_Man_B001: THREE.SkinnedMesh;
    Exercising_Woman_C002: THREE.SkinnedMesh;
    MountainBike002: THREE.SkinnedMesh;
    Exercising_Woman_C003: THREE.SkinnedMesh;
    Exercising_Man_C001: THREE.SkinnedMesh;
    ROAD1: THREE.Mesh;
    ROAD2: THREE.Mesh;
    ROAD3: THREE.Mesh;
    Roundabout1001: THREE.Mesh;
    Roundabout1002: THREE.Mesh;
    Object_257001: THREE.Mesh;
    Object_256001: THREE.Mesh;
    Object_258001: THREE.Mesh;
    Object_259001: THREE.Mesh;
    Object_260001: THREE.Mesh;
    Object_261001: THREE.Mesh;
    Object_257002: THREE.Mesh;
    Object_256002: THREE.Mesh;
    Object_258002: THREE.Mesh;
    Object_259002: THREE.Mesh;
    Object_260002: THREE.Mesh;
    Object_261002: THREE.Mesh;
    Object_257003: THREE.Mesh;
    Object_256003: THREE.Mesh;
    Object_258003: THREE.Mesh;
    Object_259003: THREE.Mesh;
    Object_260003: THREE.Mesh;
    Object_261003: THREE.Mesh;
    group_0002: THREE.Mesh;
    group_0001: THREE.Mesh;
    group_0003: THREE.Mesh;
    group_0004: THREE.Mesh;
    group_0005: THREE.Mesh;
    group_0006: THREE.Mesh;
    group_0007: THREE.Mesh;
    group_0016: THREE.Mesh;
    Van_Plane_1: THREE.Mesh;
    Van_Plane_2: THREE.Mesh;
    Van_Plane_3: THREE.Mesh;
    Van_Plane_4: THREE.Mesh;
    Van_Plane_5: THREE.Mesh;
    Van_Plane_6: THREE.Mesh;
    group_0009: THREE.Mesh;
    group_0008: THREE.Mesh;
    group_0010: THREE.Mesh;
    group_0011: THREE.Mesh;
    group_0012: THREE.Mesh;
    group_0013: THREE.Mesh;
    group_0014: THREE.Mesh;
    group_0015: THREE.Mesh;
    Streetlight1: THREE.Mesh;
    Streetlight1001: THREE.Mesh;
    Streetlight1002: THREE.Mesh;
    Streetlight1003: THREE.Mesh;
    Streetlight1004: THREE.Mesh;
    Streetlight1005: THREE.Mesh;
    Streetlight1006: THREE.Mesh;
    Streetlight1007: THREE.Mesh;
    Streetlight1008: THREE.Mesh;
    Streetlight1009: THREE.Mesh;
    Streetlight1010: THREE.Mesh;
    Streetlight1011: THREE.Mesh;
    Streetlight1012: THREE.Mesh;
    Streetlight1013: THREE.Mesh;
    Streetlight1014: THREE.Mesh;
    Streetlight1015: THREE.Mesh;
    Streetlight1016: THREE.Mesh;
    Streetlight1017: THREE.Mesh;
    Streetlight1018: THREE.Mesh;
    Streetlight1019: THREE.Mesh;
    Streetlight1020: THREE.Mesh;
    Streetlight1021: THREE.Mesh;
    Streetlight1022: THREE.Mesh;
    Streetlight1023: THREE.Mesh;
    Streetlight1024: THREE.Mesh;
    Streetlight1025: THREE.Mesh;
    Streetlight1026: THREE.Mesh;
    Streetlight1027: THREE.Mesh;
    Streetlight1028: THREE.Mesh;
    Streetlight1029: THREE.Mesh;
    Streetlight1030: THREE.Mesh;
    Streetlight1031: THREE.Mesh;
    Streetlight1032: THREE.Mesh;
    Streetlight1033: THREE.Mesh;
    Streetlight1034: THREE.Mesh;
    HILLS2: THREE.Mesh;
    GREY_TREE_1: THREE.Mesh;
    Object_186052: THREE.Mesh;
    GREY_TREE_1001: THREE.Mesh;
    Object_186053: THREE.Mesh;
    GREY_TREE_1002: THREE.Mesh;
    Object_186054: THREE.Mesh;
    GREY_TREE_1004: THREE.Mesh;
    Object_186056: THREE.Mesh;
    GREY_TREE_1005: THREE.Mesh;
    Object_186057: THREE.Mesh;
    GREY_TREE_1003: THREE.Mesh;
    Object_186055: THREE.Mesh;
    GREY_TREE_1026: THREE.Mesh;
    Object_186102: THREE.Mesh;
    GREY_TREE_1023: THREE.Mesh;
    Object_186099: THREE.Mesh;
    GREY_TREE_1024: THREE.Mesh;
    Object_186100: THREE.Mesh;
    GREY_TREE_1025: THREE.Mesh;
    Object_186101: THREE.Mesh;
    GREY_TREE_1034: THREE.Mesh;
    Object_186113: THREE.Mesh;
    GREY_TREE_1035: THREE.Mesh;
    Object_186114: THREE.Mesh;
    GREY_TREE_1027: THREE.Mesh;
    Object_186106: THREE.Mesh;
    GREY_TREE_1028: THREE.Mesh;
    Object_186107: THREE.Mesh;
    GREY_TREE_1029: THREE.Mesh;
    Object_186108: THREE.Mesh;
    GREY_TREE_1014: THREE.Mesh;
    Object_186066: THREE.Mesh;
    GREY_TREE_1015: THREE.Mesh;
    Object_186067: THREE.Mesh;
    GREY_TREE_1016: THREE.Mesh;
    Object_186068: THREE.Mesh;
    GREY_TREE_1030: THREE.Mesh;
    Object_186109: THREE.Mesh;
    GREY_TREE_1031: THREE.Mesh;
    Object_186110: THREE.Mesh;
    GREY_TREE_1032: THREE.Mesh;
    Object_186111: THREE.Mesh;
    GREY_TREE_1033: THREE.Mesh;
    Object_186112: THREE.Mesh;
    GREY_TREE_1006: THREE.Mesh;
    Object_186058: THREE.Mesh;
    GREY_TREE_1007: THREE.Mesh;
    Object_186059: THREE.Mesh;
    GREY_TREE_1008: THREE.Mesh;
    Object_186060: THREE.Mesh;
    GREY_TREE_1009: THREE.Mesh;
    Object_186061: THREE.Mesh;
    GREY_TREE_1017: THREE.Mesh;
    Object_186050: THREE.Mesh;
    GREY_TREE_1018: THREE.Mesh;
    Object_186051: THREE.Mesh;
    GREY_TREE_1010: THREE.Mesh;
    Object_186062: THREE.Mesh;
    GREY_TREE_1011: THREE.Mesh;
    Object_186063: THREE.Mesh;
    GREY_TREE_1012: THREE.Mesh;
    Object_186064: THREE.Mesh;
    GREY_TREE_1013: THREE.Mesh;
    Object_186065: THREE.Mesh;
    GREY_TREE_1019: THREE.Mesh;
    Object_186095: THREE.Mesh;
    GREY_TREE_1020: THREE.Mesh;
    Object_186096: THREE.Mesh;
    GREY_TREE_1021: THREE.Mesh;
    Object_186097: THREE.Mesh;
    GREY_TREE_1022: THREE.Mesh;
    Object_186098: THREE.Mesh;
    CLOUDSML001: THREE.Mesh;
    Icosphere001: THREE.Mesh;
    CLOUDLRG001: THREE.Mesh;
    Icosphere003: THREE.Mesh;
    Icosphere004: THREE.Mesh;
    CLOUDLRG002: THREE.Mesh;
    Icosphere006: THREE.Mesh;
    Icosphere007: THREE.Mesh;
    CLOUDSML002: THREE.Mesh;
    Icosphere002: THREE.Mesh;
    Cylinder021_1: THREE.SkinnedMesh;
    Cylinder021_2: THREE.SkinnedMesh;
    Cylinder116: THREE.SkinnedMesh;
    Cylinder116_1: THREE.SkinnedMesh;
    Cylinder117: THREE.SkinnedMesh;
    Cylinder117_1: THREE.SkinnedMesh;
    Cylinder110: THREE.SkinnedMesh;
    Cylinder110_1: THREE.SkinnedMesh;
    Cylinder111: THREE.SkinnedMesh;
    Cylinder111_1: THREE.SkinnedMesh;
    Cylinder112: THREE.SkinnedMesh;
    Cylinder112_1: THREE.SkinnedMesh;
    spine: THREE.Bone;
    BikeMain: THREE.Bone;
    spine_1: THREE.Bone;
    spine_2: THREE.Bone;
    spine_3: THREE.Bone;
    spine003_4: THREE.Bone;
    spine003_5: THREE.Bone;
    spine003_6: THREE.Bone;
    spine003_7: THREE.Bone;
    spine003_8: THREE.Bone;
    spine003_9: THREE.Bone;
  };
  materials: {
    ["OFF WHITE"]: THREE.MeshPhysicalMaterial;
    ["VITALITY LIGHT PINK AREA"]: THREE.MeshPhysicalMaterial;
    ["TREE GREEN"]: THREE.MeshStandardMaterial;
    ["OFFICE 1 MATERIAL 2K"]: THREE.MeshStandardMaterial;
    ["VITALITY LIGHT PINK"]: THREE.MeshStandardMaterial;
    ["OFFICE GREY 2 MATERIAL 2K"]: THREE.MeshStandardMaterial;
    ["VITALITY LIGHT GREY"]: THREE.MeshStandardMaterial;
    ["WOOD BROWN"]: THREE.MeshStandardMaterial;
    ["WOOD BROWN 2"]: THREE.MeshStandardMaterial;
    ["HOSPITAL MATERIAL 2K"]: THREE.MeshStandardMaterial;
    ["HOSPITAL CROSS RED"]: THREE.MeshStandardMaterial;
    ["VITALITY PINK"]: THREE.MeshStandardMaterial;
    WHITE: THREE.MeshStandardMaterial;
    ["OFFICE 2 MATERIAL 2K"]: THREE.MeshStandardMaterial;
    ["LIBRARY TEXTURE 2K B"]: THREE.MeshStandardMaterial;
    ["VITALITY GREY"]: THREE.MeshStandardMaterial;
    ["BANK MATERIAL 2K"]: THREE.MeshStandardMaterial;
    ["VITALITY BLUE AREA"]: THREE.MeshPhysicalMaterial;
    ["OFFICE 4 MATERIAL 2K"]: THREE.MeshStandardMaterial;
    ["VITALITY ICE BLUE"]: THREE.MeshStandardMaterial;
    ["OFFICE 5 MATERIAL 2K"]: THREE.MeshStandardMaterial;
    ["VITALITY BLUE"]: THREE.MeshStandardMaterial;
    ["VITALITY LIGHT VIOLET AREA"]: THREE.MeshPhysicalMaterial;
    ["VITALITY LIGHT VIOLET"]: THREE.MeshStandardMaterial;
    ["VITALITY VIOLET"]: THREE.MeshStandardMaterial;
    ["NERO GOLD"]: THREE.MeshStandardMaterial;
    ["VITALITY BLACK"]: THREE.MeshStandardMaterial;
    ["Virgin Red"]: THREE.MeshStandardMaterial;
    ["ODEON BLUE"]: THREE.MeshStandardMaterial;
    ["VITALITY GREEN AREA"]: THREE.MeshPhysicalMaterial;
    ["HOUSE 1 MATERIAL 2K"]: THREE.MeshStandardMaterial;
    ["VITALITY GREEN"]: THREE.MeshStandardMaterial;
    ["HOUSE 2 MATERIAL 2K"]: THREE.MeshStandardMaterial;
    ["VITALITY DARK GREEN"]: THREE.MeshStandardMaterial;
    ["HOUSE 3 MATERIAL 2K"]: THREE.MeshStandardMaterial;
    ["HOUSE 4 MATERIAL 2K"]: THREE.MeshStandardMaterial;
    ["VITALITY BLUE POND"]: THREE.MeshPhysicalMaterial;
    ["DUCK GREEN"]: THREE.MeshPhysicalMaterial;
    ["DUCK YELLOW"]: THREE.MeshPhysicalMaterial;
    ["VITALITY DARK GREY"]: THREE.MeshStandardMaterial;
    ["Exercising People 04.001"]: THREE.MeshPhysicalMaterial;
    ["Exercising People 05.002"]: THREE.MeshPhysicalMaterial;
    ["Light Vehicles 01.001"]: THREE.MeshPhysicalMaterial;
    ["Exercising People 05.003"]: THREE.MeshPhysicalMaterial;
    ["Exercising People 06.002"]: THREE.MeshPhysicalMaterial;
    ROAD1: THREE.MeshStandardMaterial;
    StreetLight: THREE.MeshStandardMaterial;
    ["Amazon Blue Tick"]: THREE.MeshPhysicalMaterial;
    ["Amazon White"]: THREE.MeshPhysicalMaterial;
    ["Amazon Van"]: THREE.MeshStandardMaterial;
    CLOUD: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Animation";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Map(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/map.glb") as GLTFResult;
  const { actions } = useAnimations<any>(animations, group);

  useEffect(() => {
    if (actions.Animation) {
      actions.Animation.timeScale = 0.66;
      actions.Animation.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="GROUND" position={[-1, 0, -1]}>
          <mesh
            name="Plane"
            // castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials["OFF WHITE"]}
          />
          <mesh
            name="Plane_1"
            // castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials["OFF WHITE"]}
          />
        </group>
        <group name="BezierCircle005" position={[-2.338, 0.046, -2.289]} />
        <mesh
          name="AREA_FLOOR_PINK"
          castShadow
          receiveShadow
          geometry={nodes.AREA_FLOOR_PINK.geometry}
          material={materials["VITALITY LIGHT PINK AREA"]}
          position={[-1, -0.002, -1]}
        />
        <mesh
          name="Object_186036"
          castShadow
          receiveShadow
          geometry={nodes.Object_186036.geometry}
          material={materials["TREE GREEN"]}
          position={[-0.671, 0.096, -3.625]}
          rotation={[0.35, 0.003, 0.484]}
        />
        <mesh
          name="Object_186037"
          castShadow
          receiveShadow
          geometry={nodes.Object_186037.geometry}
          material={materials["TREE GREEN"]}
          position={[-0.658, 0.089, -3.68]}
          rotation={[-0.241, -0.025, -2.715]}
        />
        <mesh
          name="Object_186019"
          castShadow
          receiveShadow
          geometry={nodes.Object_186019.geometry}
          material={materials["TREE GREEN"]}
          position={[-1.479, 0.084, -1.363]}
          rotation={[0.402, 0.323, 0.936]}
        />
        <mesh
          name="Object_186020"
          castShadow
          receiveShadow
          geometry={nodes.Object_186020.geometry}
          material={materials["TREE GREEN"]}
          position={[-1.45, 0.084, -1.423]}
          rotation={[-0.624, -0.02, -2.766]}
        />
        <mesh
          name="OFFICE_1"
          castShadow
          receiveShadow
          geometry={nodes.OFFICE_1.geometry}
          material={materials["OFFICE 1 MATERIAL 2K"]}
          position={[-3.813, 0.155, -3.252]}
        />
        <mesh
          name="Top1"
          castShadow
          receiveShadow
          geometry={nodes.Top1.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-3.879, 0.882, -3.325]}
        />
        <mesh
          name="Top2"
          castShadow
          receiveShadow
          geometry={nodes.Top2.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-3.779, 0.882, -3.325]}
        />
        <mesh
          name="OFFICE_1002"
          castShadow
          receiveShadow
          geometry={nodes.OFFICE_1002.geometry}
          material={materials["OFFICE GREY 2 MATERIAL 2K"]}
          position={[-3.102, 0.154, -3.243]}
        />
        <mesh
          name="Cube049"
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-3.207, 0.647, -3.4]}
        />
        <mesh
          name="Cube050"
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-3.098, 0.647, -3.4]}
        />
        <mesh
          name="TreeTrunk035"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk035.geometry}
          material={materials["WOOD BROWN"]}
          position={[-3.253, 0.186, -2.865]}
          rotation={[-Math.PI, 1.269, -Math.PI]}
        >
          <mesh
            name="Object_186086"
            castShadow
            receiveShadow
            geometry={nodes.Object_186086.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.008, 0.124, 0.001]}
            rotation={[0, 0.865, 0]}
          />
          <mesh
            name="Object_186087"
            castShadow
            receiveShadow
            geometry={nodes.Object_186087.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.096, -0.024, 0.018]}
            rotation={[-0.24, 0.535, 0.924]}
          />
          <mesh
            name="Object_186088"
            castShadow
            receiveShadow
            geometry={nodes.Object_186088.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.088, -0.031, 0.07]}
            rotation={[-3.11, -0.646, -2.25]}
          />
        </mesh>
        <mesh
          name="TreeTrunk039"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk039.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-3.16, 0.17, -2.708]}
          rotation={[0, 0.72, 0]}
        >
          <mesh
            name="Object_186092"
            castShadow
            receiveShadow
            geometry={nodes.Object_186092.geometry}
            material={materials["TREE GREEN"]}
            position={[0.004, 0.153, -0.009]}
            rotation={[-0.061, 0.089, 0.403]}
          />
        </mesh>
        <mesh
          name="TreeTrunk036"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk036.geometry}
          material={materials["WOOD BROWN"]}
          position={[-2.92, 0.186, -2.854]}
          rotation={[0, 1.034, 0]}
        >
          <mesh
            name="Object_186089"
            castShadow
            receiveShadow
            geometry={nodes.Object_186089.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.011, 0.175, 0.007]}
            rotation={[0.223, 0.981, 0.356]}
          />
        </mesh>
        <mesh
          name="HOSPITAL004"
          castShadow
          receiveShadow
          geometry={nodes.HOSPITAL004.geometry}
          material={materials["HOSPITAL MATERIAL 2K"]}
          position={[-3.696, 0.084, -1.699]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="HOSPITAL005"
          castShadow
          receiveShadow
          geometry={nodes.HOSPITAL005.geometry}
          material={materials["HOSPITAL MATERIAL 2K"]}
          position={[-2.863, 0.084, -1.699]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Cube052"
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials["HOSPITAL CROSS RED"]}
          position={[-3.278, 0.739, -1.548]}
        />
        <mesh
          name="Cube054"
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={materials["VITALITY PINK"]}
          position={[-3.675, 1.021, -1.699]}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-3.675, 1.009, -1.699]}
        />
        <mesh
          name="Top3012"
          castShadow
          receiveShadow
          geometry={nodes.Top3012.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-3.834, 0.998, -1.866]}
        />
        <mesh
          name="Top3013"
          castShadow
          receiveShadow
          geometry={nodes.Top3013.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-3.513, 0.998, -1.866]}
        />
        <mesh
          name="Top3014"
          castShadow
          receiveShadow
          geometry={nodes.Top3014.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-3.834, 0.998, -1.535]}
        />
        <mesh
          name="Top3015"
          castShadow
          receiveShadow
          geometry={nodes.Top3015.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-3.513, 0.998, -1.535]}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.WHITE}
          position={[-3.278, 0.739, -1.56]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["HOSPITAL CROSS RED"]}
          position={[-3.278, 0.739, -1.851]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials.WHITE}
          position={[-3.278, 0.739, -1.839]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="OFFICE_1001"
          castShadow
          receiveShadow
          geometry={nodes.OFFICE_1001.geometry}
          material={materials["OFFICE 2 MATERIAL 2K"]}
          position={[-2.438, 0.154, -3.329]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          name="Top3"
          castShadow
          receiveShadow
          geometry={nodes.Top3.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-2.505, 0.968, -3.445]}
        />
        <mesh
          name="Top3001"
          castShadow
          receiveShadow
          geometry={nodes.Top3001.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-2.464, 0.906, -3.445]}
        />
        <mesh
          name="Top3002"
          castShadow
          receiveShadow
          geometry={nodes.Top3002.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-2.423, 0.968, -3.445]}
        />
        <mesh
          name="Top3003"
          castShadow
          receiveShadow
          geometry={nodes.Top3003.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-2.383, 0.906, -3.445]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-2.581, 0.603, -2.989]}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-2.474, 0.603, -2.989]}
        />
        <mesh
          name="Cylinder010"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials["LIBRARY TEXTURE 2K B"]}
          position={[-1.627, 0.079, -3.35]}
        />
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials["LIBRARY TEXTURE 2K B"]}
          position={[-1.189, 0.079, -3.386]}
        />
        <mesh
          name="Cylinder011"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-1.627, 0.463, -3.35]}
        />
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-0.935, 0.306, -3.53]}
        />
        <mesh
          name="Cube038"
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-1.05, 0.306, -3.495]}
        />
        <mesh
          name="LIBRARY_WORDING"
          castShadow
          receiveShadow
          geometry={nodes.LIBRARY_WORDING.geometry}
          material={materials["VITALITY PINK"]}
          position={[-1.645, 0.503, -3.215]}
          rotation={[Math.PI / 2, 0, -1.689]}
          scale={0.945}
        />
        <mesh
          name="Cube039"
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-1.821, 0.498, -3.473]}
          rotation={[Math.PI, -0.703, Math.PI]}
        />
        <mesh
          name="Cube040"
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-1.774, 0.498, -3.547]}
          rotation={[Math.PI, -0.703, Math.PI]}
        />
        <mesh
          name="realisticbench013"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench013.geometry}
          material={materials["VITALITY GREY"]}
          position={[-0.656, 0.077, -3.197]}
          rotation={[1.554, -0.008, 0.048]}
        />
        <mesh
          name="realisticbench014"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench014.geometry}
          material={materials["VITALITY GREY"]}
          position={[-0.653, 0.079, -3.454]}
          rotation={[1.554, -0.008, 0.048]}
        />
        <mesh
          name="LIBRARY_BOOL"
          castShadow
          receiveShadow
          geometry={nodes.LIBRARY_BOOL.geometry}
          material={materials["VITALITY PINK"]}
          position={[-1.758, 0.546, -3.303]}
          rotation={[Math.PI / 2, 0, -0.522]}
          scale={0.729}
        />
        <mesh
          name="TreeTrunk033"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk033.geometry}
          material={materials["WOOD BROWN"]}
          position={[-0.891, 0.116, -2.891]}
          rotation={[-Math.PI, 0.888, -Math.PI]}
        >
          <mesh
            name="Object_186017"
            castShadow
            receiveShadow
            geometry={nodes.Object_186017.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.012, 0.189, 0.002]}
            rotation={[0, 0.865, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk030"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk030.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-0.528, 0.078, -3.617]}
          rotation={[0, -1.488, 0]}
        >
          <mesh
            name="Object_186081"
            castShadow
            receiveShadow
            geometry={nodes.Object_186081.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.006, 0.143, 0.001]}
            rotation={[2.729, 0.548, -1.458]}
          />
        </mesh>
        <mesh
          name="TreeTrunk031"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk031.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-0.682, 0.097, -3.658]}
          rotation={[0, 0.72, 0]}
        >
          <mesh
            name="Object_186082"
            castShadow
            receiveShadow
            geometry={nodes.Object_186082.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.003, -0.086, 0.006]}
            rotation={[0, -1.128, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk028"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk028.geometry}
          material={materials["WOOD BROWN"]}
          position={[-0.698, 0.107, -3.359]}
          rotation={[0, 1.532, 0]}
        >
          <mesh
            name="Object_186034"
            castShadow
            receiveShadow
            geometry={nodes.Object_186034.geometry}
            material={materials["TREE GREEN"]}
            position={[0, 0.203, 0.007]}
            rotation={[-0.165, -0.536, -2.372]}
          />
        </mesh>
        <mesh
          name="TreeTrunk029"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk029.geometry}
          material={materials["WOOD BROWN"]}
          position={[-1.089, 0.116, -2.947]}
          rotation={[-Math.PI, 1.269, -Math.PI]}
        >
          <mesh
            name="Object_186018"
            castShadow
            receiveShadow
            geometry={nodes.Object_186018.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.152, -0.022, 0.035]}
            rotation={[-0.24, 0.535, 0.924]}
          />
          <mesh
            name="Object_186035"
            castShadow
            receiveShadow
            geometry={nodes.Object_186035.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.007, 0.113, 0.001]}
            rotation={[0, 0.865, 0]}
          />
          <mesh
            name="Object_186084"
            castShadow
            receiveShadow
            geometry={nodes.Object_186084.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.146, -0.028, 0.082]}
            rotation={[-3.11, -0.646, -2.25]}
          />
        </mesh>
        <mesh
          name="TreeTrunk032"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk032.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-0.995, 0.077, -2.79]}
          rotation={[0, 0.72, 0]}
        >
          <mesh
            name="Object_186083"
            castShadow
            receiveShadow
            geometry={nodes.Object_186083.geometry}
            material={materials["TREE GREEN"]}
            position={[0.004, 0.176, -0.011]}
          />
        </mesh>
        <mesh
          name="Cube041"
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials["BANK MATERIAL 2K"]}
          position={[-2.061, 0.08, -1.819]}
        />
        <mesh
          name="Cylinder013"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-1.883, 0.262, -1.521]}
        />
        <mesh
          name="Cylinder014"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-1.883, 0.262, -1.64]}
        />
        <mesh
          name="Cylinder015"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-1.883, 0.262, -1.999]}
        />
        <mesh
          name="Cylinder016"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-1.883, 0.262, -2.118]}
        />
        <mesh
          name="Cylinder017"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials["VITALITY PINK"]}
          position={[-1.836, 0.489, -1.819]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          name="TreeTrunk034"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk034.geometry}
          material={materials["WOOD BROWN"]}
          position={[-1.487, 0.107, -1.999]}
          rotation={[-Math.PI, 0.405, -Math.PI]}
        >
          <mesh
            name="Object_186032"
            castShadow
            receiveShadow
            geometry={nodes.Object_186032.geometry}
            material={materials["TREE GREEN"]}
            position={[0, 0.203, 0.007]}
            rotation={[-0.165, -0.536, -2.372]}
          />
        </mesh>
        <mesh
          name="TreeTrunk038"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk038.geometry}
          material={materials["WOOD BROWN"]}
          position={[-1.549, 0.116, -1.445]}
          rotation={[-Math.PI, 0.888, -Math.PI]}
        >
          <mesh
            name="Object_186085"
            castShadow
            receiveShadow
            geometry={nodes.Object_186085.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.012, 0.189, 0.002]}
            rotation={[0, 0.865, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk040"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk040.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-1.59, 0.09, -2.127]}
          rotation={[0, -1.488, 0]}
        >
          <mesh
            name="Object_186090"
            castShadow
            receiveShadow
            geometry={nodes.Object_186090.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.006, 0.143, 0.001]}
            rotation={[2.729, 0.548, -1.458]}
          />
        </mesh>
        <mesh
          name="TreeTrunk042"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk042.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-1.654, 0.077, -1.344]}
          rotation={[0, 0.72, 0]}
        >
          <mesh
            name="Object_186093"
            castShadow
            receiveShadow
            geometry={nodes.Object_186093.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.001, 0.158, -0.008]}
            rotation={[-0.199, 0.066, 0.526]}
          />
        </mesh>
        <mesh
          name="AREA_FLOOR_BLUE"
          castShadow
          receiveShadow
          geometry={nodes.AREA_FLOOR_BLUE.geometry}
          material={materials["VITALITY BLUE AREA"]}
          position={[2.066, 0.005, -2.205]}
        />
        <group name="BezierCircle004" position={[2.066, 0, -2.205]} />
        <mesh
          name="OFFICE_4"
          castShadow
          receiveShadow
          geometry={nodes.OFFICE_4.geometry}
          material={materials["OFFICE 4 MATERIAL 2K"]}
          position={[-0.117, 0.011, -2.629]}
        />
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["VITALITY ICE BLUE"]}
          position={[-0.044, 0.435, -3.29]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["VITALITY ICE BLUE"]}
          position={[0.198, 0.435, -3.29]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["VITALITY ICE BLUE"]}
          position={[0.439, 0.435, -3.29]}
        />
        <mesh
          name="OFFICE_5"
          castShadow
          receiveShadow
          geometry={nodes.OFFICE_5.geometry}
          material={materials["OFFICE 5 MATERIAL 2K"]}
          position={[1.627, 0.009, -2.566]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["VITALITY ICE BLUE"]}
          position={[1.574, 0.952, -3.07]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials["VITALITY ICE BLUE"]}
          position={[1.9, 0.449, -3.078]}
        />
        <group name="INFO_ENTRE_1" position={[2.18, 0.008, -0.766]}>
          <mesh
            name="Cube058"
            castShadow
            receiveShadow
            geometry={nodes.Cube058.geometry}
            material={materials["VITALITY ICE BLUE"]}
          />
          <mesh
            name="Cube058_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube058_1.geometry}
            material={materials["VITALITY BLUE"]}
          />
        </group>
        <mesh
          name="Cube043"
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={materials["VITALITY BLUE"]}
          position={[2.18, 0.008, -0.766]}
        />
        <mesh
          name="Text001"
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials["VITALITY BLUE"]}
          position={[1.985, 0.105, -0.51]}
          rotation={[Math.PI / 2, 0, -0.558]}
        >
          <mesh
            name="Circle"
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials["VITALITY BLUE"]}
            position={[0, -0.005, 0.001]}
          />
        </mesh>
        <group name="Cube042" position={[2.067, 0.014, -1.688]}>
          <mesh
            name="Cube068"
            castShadow
            receiveShadow
            geometry={nodes.Cube068.geometry}
            material={materials["VITALITY ICE BLUE"]}
          />
          <mesh
            name="Cube068_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube068_1.geometry}
            material={materials["VITALITY BLUE"]}
          />
        </group>
        <mesh
          name="realisticbench001"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench001.geometry}
          material={materials["VITALITY BLUE"]}
          position={[2.214, 0.006, -1.998]}
          rotation={[Math.PI / 2, 0, 2.134]}
        />
        <mesh
          name="realisticbench002"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench002.geometry}
          material={materials["VITALITY BLUE"]}
          position={[2.324, 0.006, -1.907]}
          rotation={[Math.PI / 2, 0, 2.494]}
        />
        <mesh
          name="realisticbench003"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench003.geometry}
          material={materials["VITALITY BLUE"]}
          position={[2.357, 0.006, -1.505]}
          rotation={[Math.PI / 2, 0, -2.463]}
          scale={0.8}
        />
        <mesh
          name="realisticbench004"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench004.geometry}
          material={materials["VITALITY BLUE"]}
          position={[2.255, 0.006, -1.403]}
          rotation={[Math.PI / 2, 0, -2.138]}
        />
        <mesh
          name="Cylinder018"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials["VITALITY ICE BLUE"]}
          position={[2.067, 0.007, -1.688]}
        />
        <mesh
          name="Curve"
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials["VITALITY BLUE"]}
          position={[2.064, 0.365, -1.702]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="TreeTrunk023"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk023.geometry}
          material={materials["WOOD BROWN"]}
          position={[2.153, 0.043, -2.039]}
          rotation={[0, 0.407, 0]}
        >
          <mesh
            name="Object_186046"
            castShadow
            receiveShadow
            geometry={nodes.Object_186046.geometry}
            material={materials["TREE GREEN"]}
            position={[0, 0.203, 0.007]}
            rotation={[-0.165, -0.536, -2.372]}
          />
        </mesh>
        <mesh
          name="TreeTrunk027"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk027.geometry}
          material={materials["WOOD BROWN"]}
          position={[1.753, 0.043, -1.522]}
          rotation={[0, 0.407, 0]}
        >
          <mesh
            name="Object_186002"
            castShadow
            receiveShadow
            geometry={nodes.Object_186002.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.012, 0.189, 0.002]}
            rotation={[0, 0.865, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk024"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk024.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[2.566, 0.043, -1.73]}
          rotation={[0, -0.405, 0]}
        >
          <mesh
            name="Object_186079"
            castShadow
            receiveShadow
            geometry={nodes.Object_186079.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.006, 0.143, 0.001]}
            rotation={[2.712, 0.585, -1.363]}
          />
        </mesh>
        <mesh
          name="TreeTrunk026"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk026.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[2.515, 0.043, -1.931]}
          rotation={[0, -0.405, 0]}
        >
          <mesh
            name="Object_186001"
            castShadow
            receiveShadow
            geometry={nodes.Object_186001.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.004, -0.111, 0.008]}
            rotation={[0, -1.128, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk025"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk025.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[1.733, 0.051, -1.702]}
          rotation={[0, -0.405, 0]}
        >
          <mesh
            name="Object_186080"
            castShadow
            receiveShadow
            geometry={nodes.Object_186080.geometry}
            material={materials["TREE GREEN"]}
            position={[0.006, 0.252, -0.015]}
          />
        </mesh>
        <group name="Cube046" position={[0.991, 0.009, -2.876]}>
          <mesh
            name="Cube077"
            castShadow
            receiveShadow
            geometry={nodes.Cube077.geometry}
            material={materials["VITALITY LIGHT GREY"]}
          />
          <mesh
            name="Cube077_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube077_1.geometry}
            material={materials["VITALITY GREY"]}
          />
        </group>
        <mesh
          name="Cube047"
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[0.88, 0.281, -3.102]}
        />
        <mesh
          name="Cube048"
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[0.971, 0.281, -3.102]}
        />
        <mesh
          name="Object_186047"
          castShadow
          receiveShadow
          geometry={nodes.Object_186047.geometry}
          material={materials["TREE GREEN"]}
          position={[1.14, 0.008, -2.361]}
          rotation={[0.286, 0.658, 0.389]}
        />
        <mesh
          name="Object_186048"
          castShadow
          receiveShadow
          geometry={nodes.Object_186048.geometry}
          material={materials["TREE GREEN"]}
          position={[1.16, 0.008, -2.444]}
          rotation={[2.681, 0.553, -0.665]}
        />
        <mesh
          name="TreeTrunk021"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk021.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[1.161, 0.037, -2.445]}
          rotation={[-Math.PI, 1.035, -Math.PI]}
        >
          <mesh
            name="Object_186008"
            castShadow
            receiveShadow
            geometry={nodes.Object_186008.geometry}
            material={materials["TREE GREEN"]}
            position={[0.003, 0.162, -0.009]}
            rotation={[0.163, -0.03, 0.608]}
          />
        </mesh>
        <mesh
          name="TreeTrunk022"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk022.geometry}
          material={materials["WOOD BROWN"]}
          position={[1.142, 0.03, -2.352]}
          rotation={[0, 0.468, 0]}
        >
          <mesh
            name="Object_186078"
            castShadow
            receiveShadow
            geometry={nodes.Object_186078.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.015, 0.224, 0.001]}
            rotation={[-0.141, -0.45, 0.406]}
          />
        </mesh>
        <mesh
          name="AREA_FLOOR_VIOLET"
          castShadow
          receiveShadow
          geometry={nodes.AREA_FLOOR_VIOLET.geometry}
          material={materials["VITALITY LIGHT VIOLET AREA"]}
          position={[-1.927, 0.005, 0.924]}
        />
        <group name="BezierCircle001" position={[-1.927, 0, 0.924]} />
        <group
          name="CAFE_1"
          position={[-1.19, 0.01, 0.16]}
          rotation={[0, -0.411, 0]}
        >
          <mesh
            name="Cylinder005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_1.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
          />
          <mesh
            name="Cylinder005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_2.geometry}
            material={materials["VITALITY VIOLET"]}
          />
        </group>
        <group
          name="Cylinder006"
          position={[-0.935, 0.01, 0.272]}
          rotation={[Math.PI / 2, 0, -1.16]}
        >
          <mesh
            name="Cylinder006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_1.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
          />
          <mesh
            name="Cylinder006_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_2.geometry}
            material={materials["VITALITY VIOLET"]}
          />
        </group>
        <mesh
          name="Cylinder007"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials["VITALITY LIGHT VIOLET"]}
          position={[-1.19, 0.359, 0.16]}
          rotation={[0.297, -1.111, 0.299]}
        />
        <mesh
          name="Cylinder008"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-1.19, 0.322, 0.16]}
          rotation={[0, -0.411, 0]}
        />
        <mesh
          name="Table1"
          castShadow
          receiveShadow
          geometry={nodes.Table1.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-0.786, 0.079, 0.058]}
          rotation={[0, -0.411, 0]}
        >
          <mesh
            name="CHAIR"
            castShadow
            receiveShadow
            geometry={nodes.CHAIR.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
            position={[0, -0.047, 0.064]}
          />
          <mesh
            name="CHAIR001"
            castShadow
            receiveShadow
            geometry={nodes.CHAIR001.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
            position={[0.048, -0.047, -0.041]}
            rotation={[-Math.PI, 0.668, -Math.PI]}
          />
          <mesh
            name="CHAIR002"
            castShadow
            receiveShadow
            geometry={nodes.CHAIR002.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
            position={[-0.049, -0.047, -0.045]}
            rotation={[Math.PI, -0.837, Math.PI]}
          />
          <mesh
            name="Cube044"
            castShadow
            receiveShadow
            geometry={nodes.Cube044.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
            position={[0, -0.029, 0]}
          />
        </mesh>
        <mesh
          name="Table1001"
          castShadow
          receiveShadow
          geometry={nodes.Table1001.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-0.965, 0.079, 0.543]}
          rotation={[Math.PI, -1.287, Math.PI]}
        >
          <mesh
            name="CHAIR003"
            castShadow
            receiveShadow
            geometry={nodes.CHAIR003.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
            position={[0, -0.047, 0.064]}
          />
          <mesh
            name="CHAIR004"
            castShadow
            receiveShadow
            geometry={nodes.CHAIR004.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
            position={[0.048, -0.047, -0.041]}
            rotation={[-Math.PI, 0.668, -Math.PI]}
          />
          <mesh
            name="CHAIR005"
            castShadow
            receiveShadow
            geometry={nodes.CHAIR005.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
            position={[-0.049, -0.047, -0.045]}
            rotation={[Math.PI, -0.837, Math.PI]}
          />
          <mesh
            name="Cube045"
            castShadow
            receiveShadow
            geometry={nodes.Cube045.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
            position={[0, -0.029, 0]}
          />
        </mesh>
        {/* <mesh
          name="NERO_LOGO"
          castShadow
          receiveShadow
          geometry={nodes.NERO_LOGO.geometry}
          material={materials["NERO GOLD"]}
          position={[-1.117, 0.324, 0.347]}
          rotation={[Math.PI / 2, 0, -1.287]}
        >
          <mesh
            name="Curve005"
            castShadow
            receiveShadow
            geometry={nodes.Curve005.geometry}
            material={materials["VITALITY BLACK"]}
            position={[-0.015, -0.002, 0.124]}
          />
        </mesh> */}
        <group name="Cube012" position={[-1.092, 0.008, 1.366]}>
          <mesh
            name="Cube036_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube036_1.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
          />
          <mesh
            name="Cube036_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube036_2.geometry}
            material={materials["VITALITY VIOLET"]}
          />
        </group>
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-1.092, -0.059, 1.366]}
        />
        <mesh
          name="Cylinder005"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-0.873, 0.453, 1.354]}
        />
        <mesh
          name="Cube020"
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials["VITALITY LIGHT VIOLET"]}
          position={[-1.188, 0.297, 2.029]}
        />
        <mesh
          name="Cube021"
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials["VITALITY LIGHT VIOLET"]}
          position={[-1.188, 0.297, 1.976]}
        />
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials["VITALITY LIGHT VIOLET"]}
          position={[-1.188, 0.297, 1.923]}
        />
        {/* <mesh
          name="path770"
          castShadow
          receiveShadow
          geometry={nodes.path770.geometry}
          material={materials["Virgin Red"]}
          position={[-0.879, 0.264, 1.521]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        /> */}
        {/* <mesh
          name="path774"
          castShadow
          receiveShadow
          geometry={nodes.path774.geometry}
          material={materials["VITALITY BLACK"]}
          position={[-0.879, 0.264, 1.521]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        /> */}
        {/* <mesh
          name="path778"
          castShadow
          receiveShadow
          geometry={nodes.path778.geometry}
          material={materials["VITALITY BLACK"]}
          position={[-0.879, 0.264, 1.521]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        /> */}
        {/* <mesh
          name="path782"
          castShadow
          receiveShadow
          geometry={nodes.path782.geometry}
          material={materials["VITALITY BLACK"]}
          position={[-0.879, 0.264, 1.521]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        /> */}
        {/* <mesh
          name="path784"
          castShadow
          receiveShadow
          geometry={nodes.path784.geometry}
          material={materials["VITALITY BLACK"]}
          position={[-0.879, 0.264, 1.521]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        /> */}
        {/* <mesh
          name="path786"
          castShadow
          receiveShadow
          geometry={nodes.path786.geometry}
          material={materials["VITALITY BLACK"]}
          position={[-0.879, 0.264, 1.521]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        /> */}
        {/* <mesh
          name="path790"
          castShadow
          receiveShadow
          geometry={nodes.path790.geometry}
          material={materials["VITALITY BLACK"]}
          position={[-0.879, 0.264, 1.521]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        /> */}
        {/* <mesh
          name="path794"
          castShadow
          receiveShadow
          geometry={nodes.path794.geometry}
          material={materials["VITALITY BLACK"]}
          position={[-0.879, 0.264, 1.521]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        /> */}
        <group name="CINEMA_1" position={[-2.644, 0.008, 1.371]}>
          <mesh
            name="Cube038_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube038_1.geometry}
            material={materials["VITALITY LIGHT VIOLET"]}
          />
          <mesh
            name="Cube038_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube038_2.geometry}
            material={materials["VITALITY VIOLET"]}
          />
        </group>
        <mesh
          name="CINEMA_1001"
          castShadow
          receiveShadow
          geometry={nodes.CINEMA_1001.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-2.644, 0.236, 1.371]}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-2.871, 0.587, 1.635]}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-2.412, 0.587, 1.635]}
        />
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["VITALITY LIGHT VIOLET"]}
          position={[-2.184, 0.692, 1.25]}
        />
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials["VITALITY LIGHT VIOLET"]}
          position={[-2.039, 0.692, 1.25]}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials["VITALITY LIGHT VIOLET"]}
          position={[-2.184, 0.692, 1.399]}
        />
        <mesh
          name="Cube019"
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials["VITALITY LIGHT VIOLET"]}
          position={[-2.039, 0.692, 1.399]}
        />
        <mesh
          name="Cylinder009"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-2.922, 0.075, 1.952]}
        />
        <mesh
          name="Cylinder020"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-2.812, 0.075, 1.997]}
        />
        <mesh
          name="Cylinder021"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-2.696, 0.075, 2.018]}
        />
        <mesh
          name="Cylinder022"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-2.367, 0.075, 1.952]}
        />
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-2.477, 0.075, 1.997]}
        />
        <mesh
          name="Cylinder024"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024.geometry}
          material={materials["VITALITY VIOLET"]}
          position={[-2.592, 0.075, 2.018]}
        />
        <group
          name="Curve002"
          position={[-2.702, 0.573, 1.683]}
          rotation={[Math.PI / 2, 0.206, 0]}
        >
          <mesh
            name="Mesh001"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001.geometry}
            material={materials["VITALITY VIOLET"]}
          />
          <mesh
            name="Mesh001_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_1.geometry}
            material={materials["VITALITY VIOLET"]}
          />
          <mesh
            name="Curve001"
            castShadow
            receiveShadow
            geometry={nodes.Curve001.geometry}
            material={materials["VITALITY VIOLET"]}
            position={[-0.169, -0.008, 0.234]}
          />
          <mesh
            name="Curve003"
            castShadow
            receiveShadow
            geometry={nodes.Curve003.geometry}
            material={materials["VITALITY VIOLET"]}
            position={[-0.18, -0.008, 0.234]}
          />
        </group>
        {/* <mesh
          name="path0"
          castShadow
          receiveShadow
          geometry={nodes.path0.geometry}
          material={materials["ODEON BLUE"]}
          position={[-2.637, 0.659, 1.691]}
          rotation={[Math.PI / 2, 0, 0]}
        /> */}
        <mesh
          name="TreeTrunk037"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk037.geometry}
          material={materials["WOOD BROWN"]}
          position={[-1.769, 0.038, 1.966]}
          rotation={[-Math.PI, 0.708, -Math.PI]}
        >
          <mesh
            name="Object_186033"
            castShadow
            receiveShadow
            geometry={nodes.Object_186033.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.012, 0.189, 0.002]}
            rotation={[0, 0.217, 0]}
          />
          <mesh
            name="Object_186049"
            castShadow
            receiveShadow
            geometry={nodes.Object_186049.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.141, -0.021, 0.023]}
            rotation={[0.337, 0.126, 0.946]}
          />
          <mesh
            name="Object_186091"
            castShadow
            receiveShadow
            geometry={nodes.Object_186091.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.181, -0.022, 0.051]}
            rotation={[1.292, 1.03, 2.943]}
          />
          <mesh
            name="Object_186094"
            castShadow
            receiveShadow
            geometry={nodes.Object_186094.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.145, -0.022, 0.118]}
            rotation={[1.841, 0.11, -1.627]}
          />
        </mesh>
        <mesh
          name="TreeTrunk041"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk041.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-1.589, 0.038, 1.906]}
          rotation={[-Math.PI, 1.52, -Math.PI]}
        >
          <mesh
            name="Object_186038"
            castShadow
            receiveShadow
            geometry={nodes.Object_186038.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.004, -0.111, 0.008]}
            rotation={[Math.PI, -1.365, Math.PI]}
          />
        </mesh>
        <mesh
          name="TreeTrunk043"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk043.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-1.608, 0.046, 2.053]}
          rotation={[-Math.PI, 1.52, -Math.PI]}
        >
          <mesh
            name="Object_186039"
            castShadow
            receiveShadow
            geometry={nodes.Object_186039.geometry}
            material={materials["TREE GREEN"]}
            position={[0.006, 0.252, -0.015]}
            rotation={[0, -0.648, 0]}
          />
        </mesh>
        <mesh
          name="AREA_FLOOR_GREEN"
          castShadow
          receiveShadow
          geometry={nodes.AREA_FLOOR_GREEN.geometry}
          material={materials["VITALITY GREEN AREA"]}
          position={[1.408, 0.007, 0.902]}
        />
        <group name="BezierCircle003" position={[1.454, 0, 0.949]} />
        <mesh
          name="HOUSE_1"
          castShadow
          receiveShadow
          geometry={nodes.HOUSE_1.geometry}
          material={materials["HOUSE 1 MATERIAL 2K"]}
          position={[0.466, 0.01, 1.579]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials["VITALITY GREEN"]}
          position={[0.61, 0.353, 1.443]}
        />
        <mesh
          name="HOUSE_2"
          castShadow
          receiveShadow
          geometry={nodes.HOUSE_2.geometry}
          material={materials["HOUSE 2 MATERIAL 2K"]}
          position={[1.588, 0.01, 0.69]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Cube023"
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials["VITALITY DARK GREEN"]}
          position={[1.631, 0.381, 0.857]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="HOUSE_3"
          castShadow
          receiveShadow
          geometry={nodes.HOUSE_3.geometry}
          material={materials["HOUSE 3 MATERIAL 2K"]}
          position={[0.557, 0.01, 0.628]}
        />
        <mesh
          name="Cube025"
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials["VITALITY DARK GREEN"]}
          position={[0.557, 0.01, 0.628]}
        />
        <group name="Cube026" position={[0.387, 0.01, 0.888]}>
          <mesh
            name="Cube053"
            castShadow
            receiveShadow
            geometry={nodes.Cube053.geometry}
            material={materials["VITALITY GREEN"]}
          />
          <mesh
            name="Cube053_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube053_1.geometry}
            material={materials["VITALITY DARK GREEN"]}
          />
        </group>
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials["VITALITY DARK GREEN"]}
          position={[0.387, -0.013, 0.888]}
        />
        <mesh
          name="Cube028"
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials["HOUSE 3 MATERIAL 2K"]}
          position={[0.387, 0.259, 0.754]}
        />
        <mesh
          name="Cube029"
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials["VITALITY DARK GREEN"]}
          position={[0.387, 0.135, 0.754]}
        />
        <mesh
          name="Cube030"
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials["HOUSE 3 MATERIAL 2K"]}
          position={[0.727, 0.259, 0.754]}
        />
        <mesh
          name="Cube031"
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials["VITALITY DARK GREEN"]}
          position={[0.727, 0.135, 0.754]}
        />
        <group
          name="Cube032"
          position={[0.84, 0.01, 0.514]}
          rotation={[-Math.PI, 1.57, -Math.PI]}
        >
          <mesh
            name="Cube061"
            castShadow
            receiveShadow
            geometry={nodes.Cube061.geometry}
            material={materials["VITALITY GREEN"]}
          />
          <mesh
            name="Cube061_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube061_1.geometry}
            material={materials["VITALITY DARK GREEN"]}
          />
        </group>
        <mesh
          name="Cube033"
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials["VITALITY DARK GREEN"]}
          position={[0.84, -0.013, 0.514]}
          rotation={[-Math.PI, 1.57, -Math.PI]}
        />
        <mesh
          name="HOUSE_4"
          castShadow
          receiveShadow
          geometry={nodes.HOUSE_4.geometry}
          material={materials["HOUSE 4 MATERIAL 2K"]}
          position={[1.394, 0.01, 1.554]}
        />
        <mesh
          name="Cube037"
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={materials["VITALITY GREY"]}
          position={[1.394, 0.408, 1.554]}
        />
        <mesh
          name="TreeTrunk044"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk044.geometry}
          material={materials["WOOD BROWN"]}
          position={[0.148, 0.026, 1.709]}
          rotation={[0, 0.811, 0]}
        >
          <mesh
            name="Object_186040"
            castShadow
            receiveShadow
            geometry={nodes.Object_186040.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.009, 0.153, 0.002]}
            rotation={[0, 0.865, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk045"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk045.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-0.014, 0.026, 0.534]}
        >
          <mesh
            name="Object_186041"
            castShadow
            receiveShadow
            geometry={nodes.Object_186041.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.003, -0.101, 0.007]}
            rotation={[0, -1.128, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk047"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk047.geometry}
          material={materials["WOOD BROWN"]}
          position={[1.195, 0.037, 0.359]}
          rotation={[Math.PI, -0.902, Math.PI]}
        >
          <mesh
            name="Object_186014"
            castShadow
            receiveShadow
            geometry={nodes.Object_186014.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.01, 0.158, 0.002]}
            rotation={[0.174, 0.614, 0.213]}
          />
        </mesh>
        <mesh
          name="TreeTrunk049"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk049.geometry}
          material={materials["WOOD BROWN"]}
          position={[-0.016, 0.037, 0.367]}
        >
          <mesh
            name="Object_186044"
            castShadow
            receiveShadow
            geometry={nodes.Object_186044.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.01, 0.158, 0.002]}
            rotation={[0.174, 0.614, 0.213]}
          />
        </mesh>
        <mesh
          name="TreeTrunk046"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk046.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-0.007, 0.045, 1.745]}
          rotation={[Math.PI, -1.393, Math.PI]}
        >
          <mesh
            name="Object_186042"
            castShadow
            receiveShadow
            geometry={nodes.Object_186042.geometry}
            material={materials["TREE GREEN"]}
            position={[0.005, 0.22, -0.012]}
            rotation={[0.413, -0.116, 0.517]}
          />
        </mesh>
        <mesh
          name="TreeTrunk048"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk048.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[1.161, 0.045, 1.058]}
          rotation={[Math.PI, -1.393, Math.PI]}
        >
          <mesh
            name="Object_186015"
            castShadow
            receiveShadow
            geometry={nodes.Object_186015.geometry}
            material={materials["TREE GREEN"]}
            position={[0.005, 0.262, -0.012]}
            rotation={[0.384, -0.144, 0.458]}
          />
          <mesh
            name="Object_186016"
            castShadow
            receiveShadow
            geometry={nodes.Object_186016.geometry}
            material={materials["TREE GREEN"]}
            position={[0.04, -0.028, -0.004]}
            rotation={[0.292, -0.874, 0.848]}
          />
          <mesh
            name="Object_186043"
            castShadow
            receiveShadow
            geometry={nodes.Object_186043.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.027, -0.027, -0.033]}
            rotation={[-1.107, 0.166, -2.55]}
          />
        </mesh>
        <mesh
          name="realisticbench009"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench009.geometry}
          material={materials["VITALITY GREY"]}
          position={[-0.25, -0.002, -1.549]}
          rotation={[Math.PI / 2, 0, 0.495]}
        />
        <mesh
          name="realisticbench010"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench010.geometry}
          material={materials["VITALITY GREY"]}
          position={[-0.036, -0.002, -1.728]}
          rotation={[Math.PI / 2, 0, 1.503]}
        />
        <mesh
          name="realisticbench011"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench011.geometry}
          material={materials["VITALITY GREY"]}
          position={[0.962, -0.002, -1.141]}
          rotation={[Math.PI / 2, 0, -2.418]}
        />
        <mesh
          name="realisticbench012"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench012.geometry}
          material={materials["VITALITY GREY"]}
          position={[0.7, -0.002, -1.018]}
          rotation={[Math.PI / 2, 0, -1.716]}
        />
        <mesh
          name="Cylinder019"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials["VITALITY BLUE POND"]}
          position={[0.246, -0.076, -1.184]}
          rotation={[0, -0.068, 0]}
        >
          <mesh
            name="REED001"
            castShadow
            receiveShadow
            geometry={nodes.REED001.geometry}
            material={materials["TREE GREEN"]}
            position={[0.589, 0.048, -0.461]}
            rotation={[1.388, -0.009, -3.067]}
            scale={0.775}
          />
          <mesh
            name="REED002"
            castShadow
            receiveShadow
            geometry={nodes.REED002.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.533, 0.047, -0.217]}
            rotation={[1.616, -0.046, 2.999]}
            scale={0.481}
          />
          <mesh
            name="REED003"
            castShadow
            receiveShadow
            geometry={nodes.REED003.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.463, 0.05, -0.203]}
            rotation={[1.507, -0.127, 0.01]}
            scale={0.691}
          />
          <mesh
            name="REED001_1"
            castShadow
            receiveShadow
            geometry={nodes.REED001_1.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.492, 0.053, -0.188]}
            rotation={[1.554, -0.217, -2.952]}
            scale={0.579}
          />
          <mesh
            name="REED002_1"
            castShadow
            receiveShadow
            geometry={nodes.REED002_1.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.484, 0.051, -0.21]}
            rotation={[1.49, 0.111, -1.208]}
            scale={0.844}
          />
          <mesh
            name="REED003_1"
            castShadow
            receiveShadow
            geometry={nodes.REED003_1.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.463, 0.05, -0.203]}
            rotation={[1.747, 0.025, -1.116]}
            scale={0.708}
          />
          <mesh
            name="REED001_2"
            castShadow
            receiveShadow
            geometry={nodes.REED001_2.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.533, 0.054, -0.167]}
            rotation={[1.658, 0.155, 2.002]}
            scale={0.607}
          />
          <mesh
            name="REED002_2"
            castShadow
            receiveShadow
            geometry={nodes.REED002_2.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.525, 0.051, -0.191]}
            rotation={[1.719, -0.128, 2.215]}
            scale={0.617}
          />
          <mesh
            name="REED003_2"
            castShadow
            receiveShadow
            geometry={nodes.REED003_2.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.505, 0.053, -0.185]}
            rotation={[1.469, -0.073, 1.334]}
            scale={0.493}
          />
          <mesh
            name="REED001_3"
            castShadow
            receiveShadow
            geometry={nodes.REED001_3.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.533, 0.054, -0.167]}
            rotation={[1.396, 0.02, 1.299]}
            scale={0.813}
          />
          <mesh
            name="REED002_3"
            castShadow
            receiveShadow
            geometry={nodes.REED002_3.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.525, 0.051, -0.191]}
            rotation={[1.263, -0.025, 3.128]}
            scale={0.906}
          />
          <mesh
            name="REED003_3"
            castShadow
            receiveShadow
            geometry={nodes.REED003_3.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.505, 0.053, -0.185]}
            rotation={[1.505, -0.262, -3.075]}
            scale={0.388}
          />
          <mesh
            name="REED001_4"
            castShadow
            receiveShadow
            geometry={nodes.REED001_4.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.469, 0.052, -0.257]}
            rotation={[1.425, -0.051, -1.873]}
            scale={0.725}
          />
          <mesh
            name="REED002_4"
            castShadow
            receiveShadow
            geometry={nodes.REED002_4.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.46, 0.052, -0.273]}
            rotation={[1.58, 0.245, 0.444]}
            scale={0.778}
          />
          <mesh
            name="REED003_4"
            castShadow
            receiveShadow
            geometry={nodes.REED003_4.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.481, 0.051, -0.254]}
            rotation={[1.627, 0.256, 1.225]}
            scale={0.621}
          />
          <mesh
            name="REED001_5"
            castShadow
            receiveShadow
            geometry={nodes.REED001_5.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.508, 0.046, -0.24]}
            rotation={[1.692, -0.045, 1.533]}
            scale={0.447}
          />
          <mesh
            name="REED002_5"
            castShadow
            receiveShadow
            geometry={nodes.REED002_5.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.538, 0.044, -0.237]}
            rotation={[1.599, 0.008, -2.551]}
            scale={0.764}
          />
          <mesh
            name="REED003_5"
            castShadow
            receiveShadow
            geometry={nodes.REED003_5.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.554, 0.05, -0.192]}
            rotation={[1.361, -0.264, 2.699]}
            scale={0.67}
          />
          <mesh
            name="REED001_6"
            castShadow
            receiveShadow
            geometry={nodes.REED001_6.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.58, 0.052, -0.173]}
            rotation={[1.507, -0.002, 2.136]}
            scale={0.547}
          />
          <mesh
            name="REED002_6"
            castShadow
            receiveShadow
            geometry={nodes.REED002_6.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.565, 0.053, -0.169]}
            rotation={[1.183, 0.136, 2.508]}
            scale={0.646}
          />
          <mesh
            name="REED003_6"
            castShadow
            receiveShadow
            geometry={nodes.REED003_6.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.546, 0.054, -0.164]}
            rotation={[1.506, -0.026, 2.942]}
            scale={0.552}
          />
          <mesh
            name="REED001_7"
            castShadow
            receiveShadow
            geometry={nodes.REED001_7.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.573, 0.055, -0.143]}
            rotation={[1.451, -0.097, -2.958]}
            scale={0.759}
          />
          <mesh
            name="REED002_7"
            castShadow
            receiveShadow
            geometry={nodes.REED002_7.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.565, 0.053, -0.169]}
            rotation={[1.461, -0.297, -2.799]}
            scale={0.647}
          />
          <mesh
            name="REED003_7"
            castShadow
            receiveShadow
            geometry={nodes.REED003_7.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.546, 0.054, -0.164]}
            rotation={[1.626, -0.032, 1.852]}
            scale={0.73}
          />
          <mesh
            name="REED001_8"
            castShadow
            receiveShadow
            geometry={nodes.REED001_8.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.565, 0.052, -0.111]}
            rotation={[1.406, -0.212, 1.391]}
            scale={0.619}
          />
          <mesh
            name="REED002_8"
            castShadow
            receiveShadow
            geometry={nodes.REED002_8.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.557, 0.054, -0.138]}
            rotation={[1.617, 0.089, -2.275]}
            scale={0.582}
          />
          <mesh
            name="REED003_8"
            castShadow
            receiveShadow
            geometry={nodes.REED003_8.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.538, 0.055, -0.132]}
            rotation={[1.723, 0.241, -0.684]}
            scale={0.485}
          />
          <mesh
            name="REED001_9"
            castShadow
            receiveShadow
            geometry={nodes.REED001_9.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.565, 0.052, -0.111]}
            rotation={[1.506, -0.034, 2.007]}
            scale={0.46}
          />
          <mesh
            name="REED002_9"
            castShadow
            receiveShadow
            geometry={nodes.REED002_9.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.557, 0.054, -0.138]}
            rotation={[1.544, -0.013, -0.654]}
            scale={0.526}
          />
          <mesh
            name="REED003_9"
            castShadow
            receiveShadow
            geometry={nodes.REED003_9.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.538, 0.055, -0.132]}
            rotation={[1.803, -0.113, -1.766]}
            scale={0.57}
          />
          <mesh
            name="REED001_10"
            castShadow
            receiveShadow
            geometry={nodes.REED001_10.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.565, 0.052, -0.111]}
            rotation={[1.681, 0.289, -0.064]}
            scale={0.697}
          />
          <mesh
            name="REED002_10"
            castShadow
            receiveShadow
            geometry={nodes.REED002_10.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.517, 0.054, -0.161]}
            rotation={[1.45, 0.033, -1.837]}
            scale={0.913}
          />
          <mesh
            name="REED003_10"
            castShadow
            receiveShadow
            geometry={nodes.REED003_10.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.496, 0.054, -0.154]}
            rotation={[1.702, -0.21, 2.926]}
            scale={0.388}
          />
          <mesh
            name="REED001_11"
            castShadow
            receiveShadow
            geometry={nodes.REED001_11.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.525, 0.055, -0.136]}
            rotation={[1.535, -0.178, 0.821]}
            scale={0.591}
          />
          <mesh
            name="REED002_11"
            castShadow
            receiveShadow
            geometry={nodes.REED002_11.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.517, 0.054, -0.161]}
            rotation={[1.575, 0.154, 1.922]}
            scale={0.6}
          />
          <mesh
            name="REED003_11"
            castShadow
            receiveShadow
            geometry={nodes.REED003_11.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.496, 0.054, -0.154]}
            rotation={[1.582, 0.078, -0.526]}
            scale={0.648}
          />
          <mesh
            name="REED001_12"
            castShadow
            receiveShadow
            geometry={nodes.REED001_12.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.525, 0.055, -0.136]}
            rotation={[1.737, -0.211, 2.385]}
            scale={0.659}
          />
          <mesh
            name="REED002_12"
            castShadow
            receiveShadow
            geometry={nodes.REED002_12.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.517, 0.054, -0.161]}
            rotation={[1.223, 0.005, -0.748]}
            scale={0.597}
          />
          <mesh
            name="REED003_12"
            castShadow
            receiveShadow
            geometry={nodes.REED003_12.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.432, 0.053, -0.244]}
            rotation={[1.576, 0.044, 1.995]}
            scale={0.499}
          />
          <mesh
            name="REED001_13"
            castShadow
            receiveShadow
            geometry={nodes.REED001_13.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.648, 0.051, -0.117]}
            rotation={[1.416, -0.002, -2.079]}
            scale={0.661}
          />
          <mesh
            name="REED002_13"
            castShadow
            receiveShadow
            geometry={nodes.REED002_13.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.636, 0.052, -0.114]}
            rotation={[1.396, 0.05, -0.448]}
            scale={0.806}
          />
          <mesh
            name="REED003_13"
            castShadow
            receiveShadow
            geometry={nodes.REED003_13.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.621, 0.053, -0.11]}
            rotation={[1.879, 0.14, 1.473]}
            scale={0.579}
          />
          <mesh
            name="REED001_14"
            castShadow
            receiveShadow
            geometry={nodes.REED001_14.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.672, 0.05, -0.053]}
            rotation={[1.646, 0.001, -1.512]}
            scale={0.559}
          />
          <mesh
            name="REED002_14"
            castShadow
            receiveShadow
            geometry={nodes.REED002_14.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.666, 0.05, -0.083]}
            rotation={[1.788, -0.086, 2.095]}
            scale={0.834}
          />
          <mesh
            name="REED003_14"
            castShadow
            receiveShadow
            geometry={nodes.REED003_14.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.653, 0.05, -0.08]}
            rotation={[1.708, -0.135, 1.543]}
            scale={0.745}
          />
          <mesh
            name="REED001_15"
            castShadow
            receiveShadow
            geometry={nodes.REED001_15.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.621, 0.051, -0.173]}
            rotation={[1.482, 0.093, -1.316]}
            scale={0.626}
          />
          <mesh
            name="REED002_15"
            castShadow
            receiveShadow
            geometry={nodes.REED002_15.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.696, 0.051, -0.08]}
            rotation={[1.272, 0.068, -1.312]}
            scale={0.898}
          />
          <mesh
            name="REED003_15"
            castShadow
            receiveShadow
            geometry={nodes.REED003_15.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.685, 0.05, -0.079]}
            rotation={[1.641, 0.066, -2.753]}
            scale={0.376}
          />
          <mesh
            name="REED001_16"
            castShadow
            receiveShadow
            geometry={nodes.REED001_16.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.698, 0.052, -0.02]}
            rotation={[1.334, 0.113, 0.44]}
            scale={0.503}
          />
          <mesh
            name="REED002_16"
            castShadow
            receiveShadow
            geometry={nodes.REED002_16.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.63, 0.051, -0.082]}
            rotation={[1.528, 0.092, 2.809]}
            scale={0.678}
          />
          <mesh
            name="REED003_16"
            castShadow
            receiveShadow
            geometry={nodes.REED003_16.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.577, 0.052, -0.106]}
            rotation={[1.587, 0.274, -2.134]}
            scale={0.583}
          />
          <mesh
            name="REED001_17"
            castShadow
            receiveShadow
            geometry={nodes.REED001_17.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.602, 0.051, -0.083]}
            rotation={[1.382, -0.094, 1.925]}
            scale={0.514}
          />
          <mesh
            name="REED002_17"
            castShadow
            receiveShadow
            geometry={nodes.REED002_17.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.595, 0.053, -0.111]}
            rotation={[1.624, -0.004, 2.618]}
            scale={0.837}
          />
          <mesh
            name="REED003_17"
            castShadow
            receiveShadow
            geometry={nodes.REED003_17.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.577, 0.052, -0.106]}
            rotation={[1.631, -0.321, 1.054]}
            scale={0.401}
          />
          <mesh
            name="REED001_18"
            castShadow
            receiveShadow
            geometry={nodes.REED001_18.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.602, 0.051, -0.083]}
            rotation={[1.591, -0.058, 0.555]}
            scale={0.825}
          />
          <mesh
            name="REED002_18"
            castShadow
            receiveShadow
            geometry={nodes.REED002_18.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.608, 0.051, -0.17]}
            rotation={[1.384, -0.113, -1.232]}
            scale={0.958}
          />
          <mesh
            name="REED003_18"
            castShadow
            receiveShadow
            geometry={nodes.REED003_18.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.592, 0.052, -0.168]}
            rotation={[1.327, 0.031, -2.136]}
            scale={0.692}
          />
          <mesh
            name="REED001_19"
            castShadow
            receiveShadow
            geometry={nodes.REED001_19.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.616, 0.053, -0.146]}
            rotation={[1.286, 0.058, 1.784]}
            scale={0.841}
          />
          <mesh
            name="REED002_19"
            castShadow
            receiveShadow
            geometry={nodes.REED002_19.geometry}
            material={materials["TREE GREEN"]}
            position={[0.272, 0.056, -0.534]}
            rotation={[1.528, -0.251, -3.055]}
            scale={0.927}
          />
          <mesh
            name="REED003_19"
            castShadow
            receiveShadow
            geometry={nodes.REED003_19.geometry}
            material={materials["TREE GREEN"]}
            position={[0.292, 0.056, -0.528]}
            rotation={[1.528, -0.143, 2.072]}
            scale={0.351}
          />
          <mesh
            name="REED001_20"
            castShadow
            receiveShadow
            geometry={nodes.REED001_20.geometry}
            material={materials["TREE GREEN"]}
            position={[0.283, 0.057, -0.477]}
            rotation={[1.728, -0.006, -1.43]}
            scale={0.749}
          />
          <mesh
            name="REED002_20"
            castShadow
            receiveShadow
            geometry={nodes.REED002_20.geometry}
            material={materials["TREE GREEN"]}
            position={[0.295, 0.056, -0.518]}
            rotation={[1.783, 0.111, -1.559]}
            scale={0.739}
          />
          <mesh
            name="REED003_20"
            castShadow
            receiveShadow
            geometry={nodes.REED003_20.geometry}
            material={materials["TREE GREEN"]}
            position={[0.336, 0.052, -0.581]}
            rotation={[1.369, 0.143, 2.497]}
            scale={0.505}
          />
          <mesh
            name="REED001_21"
            castShadow
            receiveShadow
            geometry={nodes.REED001_21.geometry}
            material={materials["TREE GREEN"]}
            position={[0.312, 0.054, -0.562]}
            rotation={[1.485, -0.063, -1.082]}
            scale={0.762}
          />
          <mesh
            name="REED002_21"
            castShadow
            receiveShadow
            geometry={nodes.REED002_21.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.498, 0.052, -0.097]}
            rotation={[1.784, -0.163, 0.999]}
            scale={0.925}
          />
          <mesh
            name="REED003_21"
            castShadow
            receiveShadow
            geometry={nodes.REED003_21.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.442, 0.05, -0.142]}
            rotation={[1.814, 0.055, -2.393]}
            scale={0.66}
          />
          <mesh
            name="REED001_22"
            castShadow
            receiveShadow
            geometry={nodes.REED001_22.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.515, 0.052, -0.104]}
            rotation={[1.517, -0.098, 2.062]}
            scale={0.634}
          />
          <mesh
            name="REED002_22"
            castShadow
            receiveShadow
            geometry={nodes.REED002_22.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.507, 0.054, -0.129]}
            rotation={[1.541, -0.151, 2.955]}
            scale={0.904}
          />
          <mesh
            name="REED003_22"
            castShadow
            receiveShadow
            geometry={nodes.REED003_22.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.486, 0.053, -0.123]}
            rotation={[1.414, 0.173, 0.856]}
            scale={0.717}
          />
          <mesh
            name="REED001_23"
            castShadow
            receiveShadow
            geometry={nodes.REED001_23.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.556, 0.051, -0.078]}
            rotation={[1.708, -0.024, -0.323]}
            scale={0.45}
          />
          <mesh
            name="REED002_23"
            castShadow
            receiveShadow
            geometry={nodes.REED002_23.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.549, 0.052, -0.106]}
            rotation={[1.735, -0.151, -1.807]}
            scale={0.903}
          />
          <mesh
            name="REED003_23"
            castShadow
            receiveShadow
            geometry={nodes.REED003_23.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.529, 0.052, -0.1]}
            rotation={[1.579, -0.323, 2.038]}
            scale={0.697}
          />
          <mesh
            name="REED001_24"
            castShadow
            receiveShadow
            geometry={nodes.REED001_24.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.556, 0.051, -0.078]}
            rotation={[1.493, -0.139, 0.519]}
            scale={0.78}
          />
          <mesh
            name="REED002_24"
            castShadow
            receiveShadow
            geometry={nodes.REED002_24.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.587, 0.05, -0.078]}
            rotation={[1.691, 0.105, 1.704]}
            scale={0.752}
          />
          <mesh
            name="REED003_24"
            castShadow
            receiveShadow
            geometry={nodes.REED003_24.geometry}
            material={materials["TREE GREEN"]}
            position={[0.365, 0.051, -0.561]}
            rotation={[1.466, -0.225, 2.533]}
            scale={0.727}
          />
          <mesh
            name="REED001_25"
            castShadow
            receiveShadow
            geometry={nodes.REED001_25.geometry}
            material={materials["TREE GREEN"]}
            position={[0.357, 0.052, -0.543]}
            rotation={[1.512, 0.229, 1.763]}
            scale={0.824}
          />
          <mesh
            name="REED002_25"
            castShadow
            receiveShadow
            geometry={nodes.REED002_25.geometry}
            material={materials["TREE GREEN"]}
            position={[0.334, 0.055, -0.523]}
            rotation={[1.807, 0.063, -0.74]}
            scale={0.644}
          />
          <mesh
            name="REED003_25"
            castShadow
            receiveShadow
            geometry={nodes.REED003_25.geometry}
            material={materials["TREE GREEN"]}
            position={[0.386, 0.049, -0.558]}
            rotation={[1.406, 0.058, -1.941]}
            scale={0.56}
          />
          <mesh
            name="REED001_26"
            castShadow
            receiveShadow
            geometry={nodes.REED001_26.geometry}
            material={materials["TREE GREEN"]}
            position={[0.378, 0.052, -0.54]}
            rotation={[1.608, -0.169, -0.701]}
            scale={0.524}
          />
          <mesh
            name="REED002_26"
            castShadow
            receiveShadow
            geometry={nodes.REED002_26.geometry}
            material={materials["TREE GREEN"]}
            position={[0.37, 0.051, -0.55]}
            rotation={[1.543, -0.2, 2.578]}
            scale={0.528}
          />
          <mesh
            name="REED003_26"
            castShadow
            receiveShadow
            geometry={nodes.REED003_26.geometry}
            material={materials["TREE GREEN"]}
            position={[0.386, 0.049, -0.558]}
            rotation={[1.473, 0.213, -0.236]}
            scale={0.595}
          />
          <mesh
            name="REED001_27"
            castShadow
            receiveShadow
            geometry={nodes.REED001_27.geometry}
            material={materials["TREE GREEN"]}
            position={[0.36, 0.054, -0.51]}
            rotation={[1.536, 0.039, -0.709]}
            scale={0.542}
          />
          <mesh
            name="REED002_27"
            castShadow
            receiveShadow
            geometry={nodes.REED002_27.geometry}
            material={materials["TREE GREEN"]}
            position={[0.354, 0.054, -0.521]}
            rotation={[1.712, 0.214, -1.852]}
            scale={0.875}
          />
          <mesh
            name="REED003_27"
            castShadow
            receiveShadow
            geometry={nodes.REED003_27.geometry}
            material={materials["TREE GREEN"]}
            position={[0.345, 0.053, -0.562]}
            rotation={[1.304, -0.109, 2.414]}
            scale={0.647}
          />
          <mesh
            name="REED001_28"
            castShadow
            receiveShadow
            geometry={nodes.REED001_28.geometry}
            material={materials["TREE GREEN"]}
            position={[0.337, 0.054, -0.544]}
            rotation={[1.619, -0.202, -1.643]}
            scale={0.678}
          />
          <mesh
            name="REED002_28"
            castShadow
            receiveShadow
            geometry={nodes.REED002_28.geometry}
            material={materials["TREE GREEN"]}
            position={[0.314, 0.055, -0.522]}
            rotation={[1.519, 0.123, -1.803]}
            scale={0.929}
          />
          <mesh
            name="REED003_28"
            castShadow
            receiveShadow
            geometry={nodes.REED003_28.geometry}
            material={materials["TREE GREEN"]}
            position={[0.33, 0.055, -0.535]}
            rotation={[1.699, -0.117, -0.52]}
            scale={0.356}
          />
          <mesh
            name="REED001_29"
            castShadow
            receiveShadow
            geometry={nodes.REED001_29.geometry}
            material={materials["TREE GREEN"]}
            position={[0.301, 0.056, -0.479]}
            rotation={[1.726, -0.157, -1.364]}
            scale={0.907}
          />
          <mesh
            name="REED002_29"
            castShadow
            receiveShadow
            geometry={nodes.REED002_29.geometry}
            material={materials["TREE GREEN"]}
            position={[0.315, 0.055, -0.49]}
            rotation={[1.498, 0.131, -2.452]}
            scale={0.549}
          />
          <mesh
            name="REED003_29"
            castShadow
            receiveShadow
            geometry={nodes.REED003_29.geometry}
            material={materials["TREE GREEN"]}
            position={[0.332, 0.054, -0.503]}
            rotation={[1.891, 0.058, 1.15]}
            scale={0.372}
          />
          <mesh
            name="REED001_30"
            castShadow
            receiveShadow
            geometry={nodes.REED001_30.geometry}
            material={materials["TREE GREEN"]}
            position={[0.36, 0.05, -0.471]}
            rotation={[1.467, -0.107, 0.871]}
            scale={0.901}
          />
          <mesh
            name="REED002_30"
            castShadow
            receiveShadow
            geometry={nodes.REED002_30.geometry}
            material={materials["TREE GREEN"]}
            position={[0.374, 0.053, -0.517]}
            rotation={[1.743, 0.06, 2.871]}
            scale={0.678}
          />
          <mesh
            name="REED003_30"
            castShadow
            receiveShadow
            geometry={nodes.REED003_30.geometry}
            material={materials["TREE GREEN"]}
            position={[0.392, 0.052, -0.525]}
            rotation={[1.343, 0.025, -0.017]}
            scale={0.688}
          />
          <mesh
            name="REED001_31"
            castShadow
            receiveShadow
            geometry={nodes.REED001_31.geometry}
            material={materials["TREE GREEN"]}
            position={[0.4, 0.051, -0.533]}
            rotation={[1.518, -0.005, -3.099]}
            scale={0.505}
          />
          <mesh
            name="REED002_31"
            castShadow
            receiveShadow
            geometry={nodes.REED002_31.geometry}
            material={materials["TREE GREEN"]}
            position={[0.392, 0.051, -0.545]}
            rotation={[1.7, 0.084, -0.298]}
            scale={0.462}
          />
          <mesh
            name="REED003_31"
            castShadow
            receiveShadow
            geometry={nodes.REED003_31.geometry}
            material={materials["TREE GREEN"]}
            position={[0.409, 0.05, -0.551]}
            rotation={[1.627, 0.114, -2.474]}
            scale={0.604}
          />
          <mesh
            name="REED001_32"
            castShadow
            receiveShadow
            geometry={nodes.REED001_32.geometry}
            material={materials["TREE GREEN"]}
            position={[0.4, 0.051, -0.533]}
            rotation={[1.782, 0.197, -1.992]}
            scale={0.743}
          />
          <mesh
            name="REED002_32"
            castShadow
            receiveShadow
            geometry={nodes.REED002_32.geometry}
            material={materials["TREE GREEN"]}
            position={[0.406, 0.049, -0.567]}
            rotation={[1.593, -0.124, 2.001]}
            scale={0.876}
          />
          <mesh
            name="REED003_32"
            castShadow
            receiveShadow
            geometry={nodes.REED003_32.geometry}
            material={materials["TREE GREEN"]}
            position={[0.399, 0.048, -0.577]}
            rotation={[1.498, -0.245, -0.807]}
            scale={0.41}
          />
          <mesh
            name="REED001_33"
            castShadow
            receiveShadow
            geometry={nodes.REED001_33.geometry}
            material={materials["TREE GREEN"]}
            position={[0.134, 0.048, -0.225]}
            rotation={[1.459, 0.129, 0.614]}
            scale={0.941}
          />
          <mesh
            name="REED002_33"
            castShadow
            receiveShadow
            geometry={nodes.REED002_33.geometry}
            material={materials["TREE GREEN"]}
            position={[0.102, 0.049, -0.244]}
            rotation={[1.813, -0.132, 1.526]}
            scale={0.723}
          />
          <mesh
            name="REED003_33"
            castShadow
            receiveShadow
            geometry={nodes.REED003_33.geometry}
            material={materials["TREE GREEN"]}
            position={[0.119, 0.048, -0.216]}
            rotation={[1.641, 0.105, 2.653]}
            scale={0.515}
          />
          <mesh
            name="REED001_34"
            castShadow
            receiveShadow
            geometry={nodes.REED001_34.geometry}
            material={materials["TREE GREEN"]}
            position={[0.106, 0.05, -0.189]}
            rotation={[1.709, 0.056, 0.529]}
            scale={0.503}
          />
          <mesh
            name="REED002_34"
            castShadow
            receiveShadow
            geometry={nodes.REED002_34.geometry}
            material={materials["TREE GREEN"]}
            position={[0.153, 0.049, -0.234]}
            rotation={[1.288, 0.151, 0.753]}
            scale={0.74}
          />
          <mesh
            name="REED003_34"
            castShadow
            receiveShadow
            geometry={nodes.REED003_34.geometry}
            material={materials["TREE GREEN"]}
            position={[0.044, 0.051, -0.152]}
            rotation={[1.463, 0.13, -1.654]}
            scale={0.551}
          />
          <mesh
            name="REED001_35"
            castShadow
            receiveShadow
            geometry={nodes.REED001_35.geometry}
            material={materials["TREE GREEN"]}
            position={[0.06, 0.052, -0.16]}
            rotation={[1.508, 0.341, -2.39]}
            scale={0.875}
          />
          <mesh
            name="REED002_35"
            castShadow
            receiveShadow
            geometry={nodes.REED002_35.geometry}
            material={materials["TREE GREEN"]}
            position={[0.066, 0.051, -0.172]}
            rotation={[1.624, -0.106, -0.817]}
            scale={0.641}
          />
          <mesh
            name="REED003_35"
            castShadow
            receiveShadow
            geometry={nodes.REED003_35.geometry}
            material={materials["TREE GREEN"]}
            position={[0.091, 0.05, -0.181]}
            rotation={[1.531, 0.072, 0.745]}
            scale={0.431}
          />
          <mesh
            name="REED001_36"
            castShadow
            receiveShadow
            geometry={nodes.REED001_36.geometry}
            material={materials["TREE GREEN"]}
            position={[0.06, 0.052, -0.16]}
            rotation={[1.678, 0.312, -2.836]}
            scale={0.908}
          />
          <mesh
            name="REED002_36"
            castShadow
            receiveShadow
            geometry={nodes.REED002_36.geometry}
            material={materials["TREE GREEN"]}
            position={[0.05, 0.051, -0.178]}
            rotation={[1.644, 0.005, -0.074]}
            scale={0.839}
          />
          <mesh
            name="REED003_36"
            castShadow
            receiveShadow
            geometry={nodes.REED003_36.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.614, 0.052, 0.292]}
            rotation={[1.35, -0.245, -2.359]}
            scale={0.379}
          />
          <mesh
            name="REED001_37"
            castShadow
            receiveShadow
            geometry={nodes.REED001_37.geometry}
            material={materials["TREE GREEN"]}
            position={[0.447, 0.052, -0.51]}
            rotation={[1.477, 0.091, -1.286]}
            scale={0.9}
          />
          <mesh
            name="REED002_37"
            castShadow
            receiveShadow
            geometry={nodes.REED002_37.geometry}
            material={materials["TREE GREEN"]}
            position={[0.438, 0.051, -0.525]}
            rotation={[1.566, 0.031, -2.589]}
            scale={0.628}
          />
          <mesh
            name="REED003_37"
            castShadow
            receiveShadow
            geometry={nodes.REED003_37.geometry}
            material={materials["TREE GREEN"]}
            position={[0.457, 0.052, -0.528]}
            rotation={[1.378, 0.261, 1.895]}
            scale={0.743}
          />
          <mesh
            name="REED001_38"
            castShadow
            receiveShadow
            geometry={nodes.REED001_38.geometry}
            material={materials["TREE GREEN"]}
            position={[0.452, 0.053, -0.465]}
            rotation={[1.525, -0.043, 1.034]}
            scale={0.791}
          />
          <mesh
            name="REED002_38"
            castShadow
            receiveShadow
            geometry={nodes.REED002_38.geometry}
            material={materials["TREE GREEN"]}
            position={[0.444, 0.052, -0.484]}
            rotation={[1.361, -0.063, 2.091]}
            scale={0.738}
          />
          <mesh
            name="REED003_38"
            castShadow
            receiveShadow
            geometry={nodes.REED003_38.geometry}
            material={materials["TREE GREEN"]}
            position={[0.446, 0.052, -0.561]}
            rotation={[1.384, -0.099, 1.993]}
            scale={0.469}
          />
          <mesh
            name="REED001_39"
            castShadow
            receiveShadow
            geometry={nodes.REED001_39.geometry}
            material={materials["TREE GREEN"]}
            position={[0.439, 0.052, -0.547]}
            rotation={[1.702, 0.267, -0.097]}
            scale={0.9}
          />
          <mesh
            name="REED002_39"
            castShadow
            receiveShadow
            geometry={nodes.REED002_39.geometry}
            material={materials["TREE GREEN"]}
            position={[0.429, 0.051, -0.559]}
            rotation={[1.393, 0.216, 3.035]}
            scale={0.466}
          />
          <mesh
            name="REED003_39"
            castShadow
            receiveShadow
            geometry={nodes.REED003_39.geometry}
            material={materials["TREE GREEN"]}
            position={[0.446, 0.052, -0.561]}
            rotation={[1.575, 0.209, -1.029]}
            scale={0.689}
          />
          <mesh
            name="REED001_40"
            castShadow
            receiveShadow
            geometry={nodes.REED001_40.geometry}
            material={materials["TREE GREEN"]}
            position={[0.423, 0.05, -0.523]}
            rotation={[1.685, -0.266, 1.686]}
            scale={0.673}
          />
          <mesh
            name="REED002_40"
            castShadow
            receiveShadow
            geometry={nodes.REED002_40.geometry}
            material={materials["TREE GREEN"]}
            position={[0.414, 0.051, -0.537]}
            rotation={[1.482, 0.057, -2.537]}
            scale={0.456}
          />
          <mesh
            name="REED003_40"
            castShadow
            receiveShadow
            geometry={nodes.REED003_40.geometry}
            material={materials["TREE GREEN"]}
            position={[0.415, 0.051, -0.516]}
            rotation={[1.673, -0.058, -1.013]}
            scale={0.378}
          />
          <mesh
            name="REED001_41"
            castShadow
            receiveShadow
            geometry={nodes.REED001_41.geometry}
            material={materials["TREE GREEN"]}
            position={[0.403, 0.052, -0.495]}
            rotation={[1.556, -0.287, 2.06]}
            scale={0.93}
          />
          <mesh
            name="REED002_41"
            castShadow
            receiveShadow
            geometry={nodes.REED002_41.geometry}
            material={materials["TREE GREEN"]}
            position={[0.376, 0.051, -0.478]}
            rotation={[1.642, 0.067, -1.137]}
            scale={0.817}
          />
          <mesh
            name="REED003_41"
            castShadow
            receiveShadow
            geometry={nodes.REED003_41.geometry}
            material={materials["TREE GREEN"]}
            position={[0.418, 0.052, -0.474]}
            rotation={[1.382, -0.122, -2.877]}
            scale={0.731}
          />
          <mesh
            name="REED001_42"
            castShadow
            receiveShadow
            geometry={nodes.REED001_42.geometry}
            material={materials["TREE GREEN"]}
            position={[0.405, 0.048, -0.45]}
            rotation={[1.538, 0.06, 0.999]}
            scale={0.497}
          />
          <mesh
            name="REED002_42"
            castShadow
            receiveShadow
            geometry={nodes.REED002_42.geometry}
            material={materials["TREE GREEN"]}
            position={[0.422, 0.05, -0.454]}
            rotation={[1.851, -0.073, 2.727]}
            scale={0.786}
          />
          <mesh
            name="REED003_42"
            castShadow
            receiveShadow
            geometry={nodes.REED003_42.geometry}
            material={materials["TREE GREEN"]}
            position={[0.443, 0.053, -0.458]}
            rotation={[1.636, -0.049, -0.353]}
            scale={0.688}
          />
          <mesh
            name="REED001_43"
            castShadow
            receiveShadow
            geometry={nodes.REED001_43.geometry}
            material={materials["TREE GREEN"]}
            position={[0.455, 0.051, -0.414]}
            rotation={[1.806, -0.091, 0.982]}
            scale={0.603}
          />
          <mesh
            name="REED002_43"
            castShadow
            receiveShadow
            geometry={nodes.REED002_43.geometry}
            material={materials["TREE GREEN"]}
            position={[0.447, 0.051, -0.436]}
            rotation={[1.72, -0.082, 2.255]}
            scale={0.906}
          />
          <mesh
            name="REED003_43"
            castShadow
            receiveShadow
            geometry={nodes.REED003_43.geometry}
            material={materials["TREE GREEN"]}
            position={[0.492, 0.05, -0.466]}
            rotation={[1.33, -0.221, -1.718]}
            scale={0.659}
          />
          <mesh
            name="REED001_44"
            castShadow
            receiveShadow
            geometry={nodes.REED001_44.geometry}
            material={materials["TREE GREEN"]}
            position={[0.479, 0.052, -0.445]}
            rotation={[1.515, -0.087, -2.354]}
            scale={0.783}
          />
          <mesh
            name="REED002_44"
            castShadow
            receiveShadow
            geometry={nodes.REED002_44.geometry}
            material={materials["TREE GREEN"]}
            position={[0.47, 0.052, -0.466]}
            rotation={[1.832, -0.031, -0.828]}
            scale={0.733}
          />
          <mesh
            name="REED003_44"
            castShadow
            receiveShadow
            geometry={nodes.REED003_44.geometry}
            material={materials["TREE GREEN"]}
            position={[0.492, 0.05, -0.466]}
            rotation={[1.517, -0.003, 0.067]}
            scale={0.578}
          />
          <mesh
            name="REED001_45"
            castShadow
            receiveShadow
            geometry={nodes.REED001_45.geometry}
            material={materials["TREE GREEN"]}
            position={[0.479, 0.052, -0.445]}
            rotation={[1.877, 0.031, 0.047]}
            scale={0.612}
          />
          <mesh
            name="REED002_45"
            castShadow
            receiveShadow
            geometry={nodes.REED002_45.geometry}
            material={materials["TREE GREEN"]}
            position={[0.49, 0.051, -0.492]}
            rotation={[1.625, -0.028, -1.822]}
            scale={0.467}
          />
          <mesh
            name="REED003_45"
            castShadow
            receiveShadow
            geometry={nodes.REED003_45.geometry}
            material={materials["TREE GREEN"]}
            position={[0.51, 0.049, -0.491]}
            rotation={[1.334, 0.066, 3.103]}
            scale={0.583}
          />
          <mesh
            name="REED001_46"
            castShadow
            receiveShadow
            geometry={nodes.REED001_46.geometry}
            material={materials["TREE GREEN"]}
            position={[0.501, 0.05, -0.472]}
            rotation={[1.766, -0.114, 3.109]}
            scale={0.93}
          />
          <mesh
            name="REED002_46"
            castShadow
            receiveShadow
            geometry={nodes.REED002_46.geometry}
            material={materials["TREE GREEN"]}
            position={[0.49, 0.051, -0.492]}
            rotation={[1.635, 0.024, -2.978]}
            scale={0.58}
          />
          <mesh
            name="REED003_46"
            castShadow
            receiveShadow
            geometry={nodes.REED003_46.geometry}
            material={materials["TREE GREEN"]}
            position={[0.51, 0.049, -0.491]}
            rotation={[1.542, 0.099, 0.619]}
            scale={0.581}
          />
          <mesh
            name="REED001_47"
            castShadow
            receiveShadow
            geometry={nodes.REED001_47.geometry}
            material={materials["TREE GREEN"]}
            position={[0.501, 0.05, -0.472]}
            rotation={[1.768, -0.317, 0.515]}
            scale={0.922}
          />
          <mesh
            name="REED002_47"
            castShadow
            receiveShadow
            geometry={nodes.REED002_47.geometry}
            material={materials["TREE GREEN"]}
            position={[0.506, 0.05, -0.513]}
            rotation={[1.778, 0.003, -1.517]}
            scale={0.894}
          />
          <mesh
            name="REED003_47"
            castShadow
            receiveShadow
            geometry={nodes.REED003_47.geometry}
            material={materials["TREE GREEN"]}
            position={[0.525, 0.049, -0.509]}
            rotation={[1.488, -0.068, -1.865]}
            scale={0.472}
          />
          <mesh
            name="REED001_48"
            castShadow
            receiveShadow
            geometry={nodes.REED001_48.geometry}
            material={materials["TREE GREEN"]}
            position={[0.378, 0.05, -0.367]}
            rotation={[1.664, -0.176, -3.011]}
            scale={0.934}
          />
          <mesh
            name="REED002_48"
            castShadow
            receiveShadow
            geometry={nodes.REED002_48.geometry}
            material={materials["TREE GREEN"]}
            position={[0.354, 0.05, -0.444]}
            rotation={[1.561, -0.079, -2.327]}
            scale={0.672}
          />
          <mesh
            name="REED003_48"
            castShadow
            receiveShadow
            geometry={nodes.REED003_48.geometry}
            material={materials["TREE GREEN"]}
            position={[0.445, 0.051, -0.407]}
            rotation={[1.496, 0.04, 0.739]}
            scale={0.659}
          />
          <mesh
            name="REED001_49"
            castShadow
            receiveShadow
            geometry={nodes.REED001_49.geometry}
            material={materials["TREE GREEN"]}
            position={[0.404, 0.05, -0.401]}
            rotation={[1.287, -0.108, 2.155]}
            scale={0.54}
          />
          <mesh
            name="REED002_49"
            castShadow
            receiveShadow
            geometry={nodes.REED002_49.geometry}
            material={materials["TREE GREEN"]}
            position={[0.398, 0.049, -0.421]}
            rotation={[1.508, -0.084, -1.935]}
            scale={0.771}
          />
          <mesh
            name="REED003_49"
            castShadow
            receiveShadow
            geometry={nodes.REED003_49.geometry}
            material={materials["TREE GREEN"]}
            position={[0.419, 0.05, -0.426]}
            rotation={[1.737, 0.205, -0.519]}
            scale={0.627}
          />
          <mesh
            name="REED001_50"
            castShadow
            receiveShadow
            geometry={nodes.REED001_50.geometry}
            material={materials["TREE GREEN"]}
            position={[0.404, 0.05, -0.401]}
            rotation={[1.58, 0.126, 2.673]}
            scale={0.673}
          />
          <mesh
            name="REED002_50"
            castShadow
            receiveShadow
            geometry={nodes.REED002_50.geometry}
            material={materials["TREE GREEN"]}
            position={[0.398, 0.049, -0.421]}
            rotation={[1.77, -0.066, 0.271]}
            scale={0.559}
          />
          <mesh
            name="REED003_50"
            castShadow
            receiveShadow
            geometry={nodes.REED003_50.geometry}
            material={materials["TREE GREEN"]}
            position={[0.395, 0.048, -0.442]}
            rotation={[1.659, -0.02, 2.773]}
            scale={0.572}
          />
          <mesh
            name="REED001_51"
            castShadow
            receiveShadow
            geometry={nodes.REED001_51.geometry}
            material={materials["TREE GREEN"]}
            position={[0.381, 0.05, -0.417]}
            rotation={[1.548, 0.283, -1.8]}
            scale={0.859}
          />
          <mesh
            name="REED002_51"
            castShadow
            receiveShadow
            geometry={nodes.REED002_51.geometry}
            material={materials["TREE GREEN"]}
            position={[0.375, 0.049, -0.434]}
            rotation={[1.74, 0.099, -3.079]}
            scale={0.806}
          />
          <mesh
            name="REED003_51"
            castShadow
            receiveShadow
            geometry={nodes.REED003_51.geometry}
            material={materials["TREE GREEN"]}
            position={[0.395, 0.048, -0.442]}
            rotation={[1.57, -0.237, 1.096]}
            scale={0.497}
          />
          <mesh
            name="REED001_52"
            castShadow
            receiveShadow
            geometry={nodes.REED001_52.geometry}
            material={materials["TREE GREEN"]}
            position={[0.138, 0.053, -0.176]}
            rotation={[1.519, -0.005, -1.922]}
            scale={0.49}
          />
          <mesh
            name="REED002_52"
            castShadow
            receiveShadow
            geometry={nodes.REED002_52.geometry}
            material={materials["TREE GREEN"]}
            position={[0.159, 0.053, -0.182]}
            rotation={[1.799, -0.149, -0.753]}
            scale={0.519}
          />
          <mesh
            name="REED003_52"
            castShadow
            receiveShadow
            geometry={nodes.REED003_52.geometry}
            material={materials["TREE GREEN"]}
            position={[0.184, 0.053, -0.19]}
            rotation={[1.649, -0.108, -1.344]}
            scale={0.4}
          />
          <mesh
            name="REED001_53"
            castShadow
            receiveShadow
            geometry={nodes.REED001_53.geometry}
            material={materials["TREE GREEN"]}
            position={[0.043, 0.05, -0.117]}
            rotation={[1.428, 0.085, 0.246]}
            scale={0.868}
          />
          <mesh
            name="REED002_53"
            castShadow
            receiveShadow
            geometry={nodes.REED002_53.geometry}
            material={materials["TREE GREEN"]}
            position={[0.049, 0.052, -0.131]}
            rotation={[1.493, -0.191, 1.595]}
            scale={0.907}
          />
          <mesh
            name="REED003_53"
            castShadow
            receiveShadow
            geometry={nodes.REED003_53.geometry}
            material={materials["TREE GREEN"]}
            position={[0.075, 0.054, -0.138]}
            rotation={[1.411, -0.145, -3.067]}
            scale={0.492}
          />
          <mesh
            name="REED001_54"
            castShadow
            receiveShadow
            geometry={nodes.REED001_54.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.005, 0.053, -0.088]}
            rotation={[1.404, -0.024, -2.517]}
            scale={0.577}
          />
          <mesh
            name="REED002_54"
            castShadow
            receiveShadow
            geometry={nodes.REED002_54.geometry}
            material={materials["TREE GREEN"]}
            position={[0.065, 0.052, -0.122]}
            rotation={[1.629, 0.062, 0.412]}
            scale={0.671}
          />
          <mesh
            name="REED003_54"
            castShadow
            receiveShadow
            geometry={nodes.REED003_54.geometry}
            material={materials["TREE GREEN"]}
            position={[0.091, 0.054, -0.129]}
            rotation={[1.293, 0.217, 1.88]}
            scale={0.445}
          />
          <mesh
            name="REED001_55"
            castShadow
            receiveShadow
            geometry={nodes.REED001_55.geometry}
            material={materials["TREE GREEN"]}
            position={[0.059, 0.051, -0.108]}
            rotation={[1.495, 0.007, -2.731]}
            scale={0.657}
          />
          <mesh
            name="REED002_55"
            castShadow
            receiveShadow
            geometry={nodes.REED002_55.geometry}
            material={materials["TREE GREEN"]}
            position={[0.065, 0.052, -0.122]}
            rotation={[1.429, -0.276, 2.091]}
            scale={0.639}
          />
          <mesh
            name="REED003_55"
            castShadow
            receiveShadow
            geometry={nodes.REED003_55.geometry}
            material={materials["TREE GREEN"]}
            position={[0.091, 0.054, -0.129]}
            rotation={[1.557, -0.033, 2.937]}
            scale={0.712}
          />
          <mesh
            name="REED001_56"
            castShadow
            receiveShadow
            geometry={nodes.REED001_56.geometry}
            material={materials["TREE GREEN"]}
            position={[0.059, 0.051, -0.108]}
            rotation={[1.613, -0.067, 1.7]}
            scale={0.483}
          />
          <mesh
            name="REED002_56"
            castShadow
            receiveShadow
            geometry={nodes.REED002_56.geometry}
            material={materials["TREE GREEN"]}
            position={[0.017, 0.051, -0.093]}
            rotation={[1.595, -0.231, 0.269]}
            scale={0.681}
          />
          <mesh
            name="REED003_56"
            castShadow
            receiveShadow
            geometry={nodes.REED003_56.geometry}
            material={materials["TREE GREEN"]}
            position={[0.107, 0.052, -0.175]}
            rotation={[1.426, 0.18, -3.026]}
            scale={0.371}
          />
          <mesh
            name="REED001_57"
            castShadow
            receiveShadow
            geometry={nodes.REED001_57.geometry}
            material={materials["TREE GREEN"]}
            position={[0.076, 0.054, -0.153]}
            rotation={[1.748, 0.074, 2.705]}
            scale={0.898}
          />
          <mesh
            name="REED002_57"
            castShadow
            receiveShadow
            geometry={nodes.REED002_57.geometry}
            material={materials["TREE GREEN"]}
            position={[0.034, 0.051, -0.138]}
            rotation={[1.639, -0.139, 0.955]}
            scale={0.746}
          />
          <mesh
            name="REED003_57"
            castShadow
            receiveShadow
            geometry={nodes.REED003_57.geometry}
            material={materials["TREE GREEN"]}
            position={[0.06, 0.054, -0.146]}
            rotation={[1.646, 0.26, 1.641]}
            scale={0.406}
          />
          <mesh
            name="REED001_58"
            castShadow
            receiveShadow
            geometry={nodes.REED001_58.geometry}
            material={materials["TREE GREEN"]}
            position={[0.028, 0.05, -0.125]}
            rotation={[1.714, 0.054, -1.235]}
            scale={0.739}
          />
          <mesh
            name="REED002_58"
            castShadow
            receiveShadow
            geometry={nodes.REED002_58.geometry}
            material={materials["TREE GREEN"]}
            position={[0.033, 0.052, -0.084]}
            rotation={[1.402, 0.321, 0.681]}
            scale={0.806}
          />
          <mesh
            name="REED003_58"
            castShadow
            receiveShadow
            geometry={nodes.REED003_58.geometry}
            material={materials["TREE GREEN"]}
            position={[0.059, 0.053, -0.09]}
            rotation={[1.507, 0.103, -2.861]}
            scale={0.723}
          />
          <mesh
            name="REED001_59"
            castShadow
            receiveShadow
            geometry={nodes.REED001_59.geometry}
            material={materials["TREE GREEN"]}
            position={[0.075, 0.054, -0.098]}
            rotation={[1.72, 0.033, -2.865]}
            scale={0.764}
          />
          <mesh
            name="REED002_59"
            castShadow
            receiveShadow
            geometry={nodes.REED002_59.geometry}
            material={materials["TREE GREEN"]}
            position={[0.129, 0.054, -0.142]}
            rotation={[1.827, -0.087, 2.558]}
            scale={0.666}
          />
          <mesh
            name="REED003_59"
            castShadow
            receiveShadow
            geometry={nodes.REED003_59.geometry}
            material={materials["TREE GREEN"]}
            position={[0.155, 0.054, -0.149]}
            rotation={[1.419, -0.024, 3.098]}
            scale={0.487}
          />
          <mesh
            name="REED001_60"
            castShadow
            receiveShadow
            geometry={nodes.REED001_60.geometry}
            material={materials["TREE GREEN"]}
            position={[0.123, 0.056, -0.127]}
            rotation={[1.601, -0.188, 1.728]}
            scale={0.808}
          />
          <mesh
            name="REED002_60"
            castShadow
            receiveShadow
            geometry={nodes.REED002_60.geometry}
            material={materials["TREE GREEN"]}
            position={[0.129, 0.054, -0.142]}
            rotation={[1.549, 0.15, 0.883]}
            scale={0.592}
          />
          <mesh
            name="REED003_60"
            castShadow
            receiveShadow
            geometry={nodes.REED003_60.geometry}
            material={materials["TREE GREEN"]}
            position={[0.139, 0.053, -0.159]}
            rotation={[1.36, 0.017, 2.049]}
            scale={0.419}
          />
          <mesh
            name="REED001_61"
            castShadow
            receiveShadow
            geometry={nodes.REED001_61.geometry}
            material={materials["TREE GREEN"]}
            position={[0.107, 0.055, -0.137]}
            rotation={[1.377, -0.043, 0.858]}
            scale={0.643}
          />
          <mesh
            name="REED002_61"
            castShadow
            receiveShadow
            geometry={nodes.REED002_61.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.396, 0.053, 0.164]}
            rotation={[1.503, 0.095, -1.543]}
            scale={0.852}
          />
          <mesh
            name="REED003_61"
            castShadow
            receiveShadow
            geometry={nodes.REED003_61.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.369, 0.052, 0.163]}
            rotation={[1.512, 0.189, -1.496]}
            scale={0.563}
          />
          <mesh
            name="REED001_62"
            castShadow
            receiveShadow
            geometry={nodes.REED001_62.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.363, 0.049, 0.208]}
            rotation={[1.464, 0.093, -1.729]}
            scale={0.726}
          />
          <mesh
            name="REED002_62"
            castShadow
            receiveShadow
            geometry={nodes.REED002_62.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.368, 0.05, 0.186]}
            rotation={[1.541, 0.143, -1.499]}
            scale={0.646}
          />
          <mesh
            name="REED003_62"
            castShadow
            receiveShadow
            geometry={nodes.REED003_62.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.341, 0.051, 0.183]}
            rotation={[1.455, 0.153, 1.52]}
            scale={0.721}
          />
          <mesh
            name="REED001_63"
            castShadow
            receiveShadow
            geometry={nodes.REED001_63.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.363, 0.049, 0.208]}
            rotation={[1.3, -0.063, -1.752]}
            scale={0.739}
          />
          <mesh
            name="REED002_63"
            castShadow
            receiveShadow
            geometry={nodes.REED002_63.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.368, 0.05, 0.186]}
            rotation={[1.599, -0.091, -2.493]}
            scale={0.7}
          />
          <mesh
            name="REED003_63"
            castShadow
            receiveShadow
            geometry={nodes.REED003_63.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.441, 0.052, 0.227]}
            rotation={[1.775, 0.204, -1.279]}
            scale={0.402}
          />
          <mesh
            name="REED001_64"
            castShadow
            receiveShadow
            geometry={nodes.REED001_64.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.433, 0.054, 0.275]}
            rotation={[1.449, 0.016, 0.25]}
            scale={0.63}
          />
          <mesh
            name="REED002_64"
            castShadow
            receiveShadow
            geometry={nodes.REED002_64.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.439, 0.052, 0.251]}
            rotation={[1.774, -0.157, -0.698]}
            scale={0.894}
          />
          <mesh
            name="REED003_64"
            castShadow
            receiveShadow
            geometry={nodes.REED003_64.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.383, 0.048, 0.268]}
            rotation={[1.603, -0.047, -0.876]}
            scale={0.368}
          />
          <mesh
            name="REED001_65"
            castShadow
            receiveShadow
            geometry={nodes.REED001_65.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.37, 0.048, 0.26]}
            rotation={[1.448, 0.077, 2.537]}
            scale={0.784}
          />
          <mesh
            name="REED002_65"
            castShadow
            receiveShadow
            geometry={nodes.REED002_65.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.375, 0.048, 0.239]}
            rotation={[1.795, -0.161, 0.632]}
            scale={0.804}
          />
          <mesh
            name="REED003_65"
            castShadow
            receiveShadow
            geometry={nodes.REED003_65.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.348, 0.05, 0.234]}
            rotation={[1.684, 0.087, -2.862]}
            scale={0.523}
          />
          <mesh
            name="REED001_66"
            castShadow
            receiveShadow
            geometry={nodes.REED001_66.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.37, 0.048, 0.26]}
            rotation={[1.845, 0.07, -0.074]}
            scale={0.652}
          />
          <mesh
            name="REED002_66"
            castShadow
            receiveShadow
            geometry={nodes.REED002_66.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.404, 0.05, 0.218]}
            rotation={[1.597, -0.051, -2.051]}
            scale={0.577}
          />
          <mesh
            name="REED003_66"
            castShadow
            receiveShadow
            geometry={nodes.REED003_66.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.377, 0.048, 0.216]}
            rotation={[1.275, 0.049, -0.62]}
            scale={0.401}
          />
          <mesh
            name="REED001_67"
            castShadow
            receiveShadow
            geometry={nodes.REED001_67.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.399, 0.048, 0.242]}
            rotation={[1.688, -0.096, 2.78]}
            scale={0.594}
          />
          <mesh
            name="REED002_67"
            castShadow
            receiveShadow
            geometry={nodes.REED002_67.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.404, 0.05, 0.218]}
            rotation={[1.645, -0.09, 1.211]}
            scale={0.535}
          />
          <mesh
            name="REED003_67"
            castShadow
            receiveShadow
            geometry={nodes.REED003_67.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.377, 0.048, 0.216]}
            rotation={[1.9, -0.056, 0.443]}
            scale={0.421}
          />
          <mesh
            name="REED001_68"
            castShadow
            receiveShadow
            geometry={nodes.REED001_68.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.399, 0.048, 0.242]}
            rotation={[1.707, 0.015, -0.496]}
            scale={0.555}
          />
          <mesh
            name="REED002_68"
            castShadow
            receiveShadow
            geometry={nodes.REED002_68.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.404, 0.05, 0.218]}
            rotation={[1.579, -0.132, -2.461]}
            scale={0.468}
          />
          <mesh
            name="REED003_68"
            castShadow
            receiveShadow
            geometry={nodes.REED003_68.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.377, 0.048, 0.216]}
            rotation={[1.848, -0.083, -1.614]}
            scale={0.427}
          />
          <mesh
            name="REED001_69"
            castShadow
            receiveShadow
            geometry={nodes.REED001_69.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.399, 0.048, 0.242]}
            rotation={[1.765, 0.028, -2.007]}
            scale={0.843}
          />
          <mesh
            name="REED002_69"
            castShadow
            receiveShadow
            geometry={nodes.REED002_69.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.404, 0.05, 0.218]}
            rotation={[1.509, -0.034, 1.377]}
            scale={0.473}
          />
          <mesh
            name="REED003_69"
            castShadow
            receiveShadow
            geometry={nodes.REED003_69.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.377, 0.048, 0.216]}
            rotation={[1.871, 0.028, -0.592]}
            scale={0.386}
          />
          <mesh
            name="REED001_70"
            castShadow
            receiveShadow
            geometry={nodes.REED001_70.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.428, 0.051, 0.22]}
            rotation={[1.572, -0.017, 1.109]}
            scale={0.701}
          />
          <mesh
            name="REED002_70"
            castShadow
            receiveShadow
            geometry={nodes.REED002_70.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.433, 0.052, 0.196]}
            rotation={[1.621, -0.057, -0.081]}
            scale={0.885}
          />
          <mesh
            name="REED003_70"
            castShadow
            receiveShadow
            geometry={nodes.REED003_70.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.406, 0.051, 0.195]}
            rotation={[1.729, -0.354, -2.443]}
            scale={0.607}
          />
          <mesh
            name="REED001_71"
            castShadow
            receiveShadow
            geometry={nodes.REED001_71.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.582, 0.054, 0.366]}
            rotation={[1.292, -0.119, -0.922]}
            scale={0.774}
          />
          <mesh
            name="REED002_71"
            castShadow
            receiveShadow
            geometry={nodes.REED002_71.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.589, 0.053, 0.343]}
            rotation={[1.545, -0.06, 0.004]}
            scale={0.473}
          />
          <mesh
            name="REED003_71"
            castShadow
            receiveShadow
            geometry={nodes.REED003_71.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.567, 0.053, 0.346]}
            rotation={[1.207, 0.053, -1.971]}
            scale={0.691}
          />
          <mesh
            name="REED001_72"
            castShadow
            receiveShadow
            geometry={nodes.REED001_72.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.582, 0.054, 0.366]}
            rotation={[1.592, -0.04, -2.539]}
            scale={0.894}
          />
          <mesh
            name="REED002_72"
            castShadow
            receiveShadow
            geometry={nodes.REED002_72.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.589, 0.053, 0.343]}
            rotation={[1.212, 0.062, 2.447]}
            scale={0.886}
          />
          <mesh
            name="REED003_72"
            castShadow
            receiveShadow
            geometry={nodes.REED003_72.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.592, 0.054, 0.37]}
            rotation={[1.702, -0.005, 0.71]}
            scale={0.445}
          />
          <mesh
            name="REED001_73"
            castShadow
            receiveShadow
            geometry={nodes.REED001_73.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.556, 0.052, 0.392]}
            rotation={[1.367, -0.044, 1.705]}
            scale={0.638}
          />
          <mesh
            name="REED002_73"
            castShadow
            receiveShadow
            geometry={nodes.REED002_73.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.563, 0.053, 0.369]}
            rotation={[1.762, -0.051, 0.469]}
            scale={0.512}
          />
          <mesh
            name="REED003_73"
            castShadow
            receiveShadow
            geometry={nodes.REED003_73.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.54, 0.052, 0.371]}
            rotation={[1.586, -0.054, 2.235]}
            scale={0.706}
          />
          <mesh
            name="REED001_74"
            castShadow
            receiveShadow
            geometry={nodes.REED001_74.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.581, 0.049, 0.315]}
            rotation={[1.363, 0.211, -2.372]}
            scale={0.74}
          />
          <mesh
            name="REED002_74"
            castShadow
            receiveShadow
            geometry={nodes.REED002_74.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.612, 0.053, 0.316]}
            rotation={[1.648, -0.045, -2.29]}
            scale={0.826}
          />
          <mesh
            name="REED003_74"
            castShadow
            receiveShadow
            geometry={nodes.REED003_74.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.592, 0.051, 0.319]}
            rotation={[1.368, -0.146, -3.047]}
            scale={0.409}
          />
          <mesh
            name="REED001_75"
            castShadow
            receiveShadow
            geometry={nodes.REED001_75.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.607, 0.055, 0.34]}
            rotation={[1.409, -0.195, 1.934]}
            scale={0.533}
          />
          <mesh
            name="REED002_75"
            castShadow
            receiveShadow
            geometry={nodes.REED002_75.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.536, 0.052, 0.393]}
            rotation={[1.395, 0.042, -1.985]}
            scale={0.658}
          />
          <mesh
            name="REED003_75"
            castShadow
            receiveShadow
            geometry={nodes.REED003_75.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.539, 0.049, 0.319]}
            rotation={[1.523, 0.245, 2.493]}
            scale={0.724}
          />
          <mesh
            name="REED001_76"
            castShadow
            receiveShadow
            geometry={nodes.REED001_76.geometry}
            material={materials["TREE GREEN"]}
            position={[0.559, 0.049, -0.42]}
            rotation={[1.55, -0.016, -1.387]}
            scale={0.647}
          />
          <mesh
            name="REED002_76"
            castShadow
            receiveShadow
            geometry={nodes.REED002_76.geometry}
            material={materials["TREE GREEN"]}
            position={[0.547, 0.049, -0.444]}
            rotation={[1.647, 0.179, 2.792]}
            scale={0.941}
          />
          <mesh
            name="REED003_76"
            castShadow
            receiveShadow
            geometry={nodes.REED003_76.geometry}
            material={materials["TREE GREEN"]}
            position={[0.568, 0.049, -0.44]}
            rotation={[1.731, 0.112, 2.175]}
            scale={0.567}
          />
          <mesh
            name="REED001_77"
            castShadow
            receiveShadow
            geometry={nodes.REED001_77.geometry}
            material={materials["TREE GREEN"]}
            position={[0.559, 0.049, -0.42]}
            rotation={[1.738, -0.132, -1.59]}
            scale={0.487}
          />
          <mesh
            name="REED002_77"
            castShadow
            receiveShadow
            geometry={nodes.REED002_77.geometry}
            material={materials["TREE GREEN"]}
            position={[0.527, 0.05, -0.418]}
            rotation={[1.419, 0.06, -0.772]}
            scale={0.705}
          />
          <mesh
            name="REED003_77"
            castShadow
            receiveShadow
            geometry={nodes.REED003_77.geometry}
            material={materials["TREE GREEN"]}
            position={[0.539, 0.049, -0.467]}
            rotation={[1.757, 0.026, 2.343]}
            scale={0.705}
          />
          <mesh
            name="REED001_78"
            castShadow
            receiveShadow
            geometry={nodes.REED001_78.geometry}
            material={materials["TREE GREEN"]}
            position={[0.529, 0.049, -0.448]}
            rotation={[1.376, 0.084, -2.776]}
            scale={0.715}
          />
          <mesh
            name="REED002_78"
            castShadow
            receiveShadow
            geometry={nodes.REED002_78.geometry}
            material={materials["TREE GREEN"]}
            position={[0.518, 0.049, -0.47]}
            rotation={[1.703, -0.056, -0.88]}
            scale={0.54}
          />
          <mesh
            name="REED003_78"
            castShadow
            receiveShadow
            geometry={nodes.REED003_78.geometry}
            material={materials["TREE GREEN"]}
            position={[0.52, 0.049, -0.443]}
            rotation={[1.414, -0.088, 3.043]}
            scale={0.396}
          />
          <mesh
            name="REED001_79"
            castShadow
            receiveShadow
            geometry={nodes.REED001_79.geometry}
            material={materials["TREE GREEN"]}
            position={[0.483, 0.049, -0.39]}
            rotation={[1.572, -0.137, 0.603]}
            scale={0.833}
          />
          <mesh
            name="REED002_79"
            castShadow
            receiveShadow
            geometry={nodes.REED002_79.geometry}
            material={materials["TREE GREEN"]}
            position={[0.475, 0.051, -0.414]}
            rotation={[1.779, -0.195, 0.904]}
            scale={0.865}
          />
          <mesh
            name="REED003_79"
            castShadow
            receiveShadow
            geometry={nodes.REED003_79.geometry}
            material={materials["TREE GREEN"]}
            position={[0.472, 0.05, -0.383]}
            rotation={[1.784, 0.207, 0.475]}
            scale={0.701}
          />
          <mesh
            name="REED001_80"
            castShadow
            receiveShadow
            geometry={nodes.REED001_80.geometry}
            material={materials["TREE GREEN"]}
            position={[0.106, 0.054, -0.076]}
            rotation={[1.58, 0.027, 0.979]}
            scale={0.458}
          />
          <mesh
            name="REED002_80"
            castShadow
            receiveShadow
            geometry={nodes.REED002_80.geometry}
            material={materials["TREE GREEN"]}
            position={[0.064, 0.054, -0.063]}
            rotation={[1.709, 0.292, -0.121]}
            scale={0.677}
          />
          <mesh
            name="REED003_80"
            castShadow
            receiveShadow
            geometry={nodes.REED003_80.geometry}
            material={materials["TREE GREEN"]}
            position={[0.155, 0.054, -0.083]}
            rotation={[1.759, 0.079, 1.259]}
            scale={0.514}
          />
          <mesh
            name="REED001_81"
            castShadow
            receiveShadow
            geometry={nodes.REED001_81.geometry}
            material={materials["TREE GREEN"]}
            position={[0.14, 0.055, -0.115]}
            rotation={[1.407, -0.045, -1.49]}
            scale={0.578}
          />
          <mesh
            name="REED002_81"
            castShadow
            receiveShadow
            geometry={nodes.REED002_81.geometry}
            material={materials["TREE GREEN"]}
            position={[0.145, 0.055, -0.131]}
            rotation={[1.595, -0.037, 2.158]}
            scale={0.467}
          />
          <mesh
            name="REED003_81"
            castShadow
            receiveShadow
            geometry={nodes.REED003_81.geometry}
            material={materials["TREE GREEN"]}
            position={[0.123, 0.055, -0.108]}
            rotation={[1.631, -0.283, 1.539]}
            scale={0.643}
          />
          <mesh
            name="REED001_82"
            castShadow
            receiveShadow
            geometry={nodes.REED001_82.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.342, 0.048, 0.276]}
            rotation={[1.5, -0.126, 0.316]}
            scale={0.582}
          />
          <mesh
            name="REED002_82"
            castShadow
            receiveShadow
            geometry={nodes.REED002_82.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.347, 0.049, 0.256]}
            rotation={[1.691, 0.149, -0.173]}
            scale={0.931}
          />
          <mesh
            name="REED003_82"
            castShadow
            receiveShadow
            geometry={nodes.REED003_82.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.424, 0.055, 0.447]}
            rotation={[1.622, -0.213, 1.108]}
            scale={0.511}
          />
          <mesh
            name="REED001_83"
            castShadow
            receiveShadow
            geometry={nodes.REED001_83.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.44, 0.052, 0.469]}
            rotation={[1.7, 0.015, -1.372]}
            scale={0.618}
          />
          <mesh
            name="REED002_83"
            castShadow
            receiveShadow
            geometry={nodes.REED002_83.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.449, 0.054, 0.451]}
            rotation={[1.658, 0.074, 2.551]}
            scale={0.922}
          />
          <mesh
            name="REED003_83"
            castShadow
            receiveShadow
            geometry={nodes.REED003_83.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.45, 0.051, 0.475]}
            rotation={[1.876, 0.057, 0.775]}
            scale={0.737}
          />
          <mesh
            name="REED001_84"
            castShadow
            receiveShadow
            geometry={nodes.REED001_84.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.433, 0.052, 0.507]}
            rotation={[1.713, -0.082, 0.339]}
            scale={0.482}
          />
          <mesh
            name="REED002_84"
            castShadow
            receiveShadow
            geometry={nodes.REED002_84.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.443, 0.051, 0.492]}
            rotation={[1.612, -0.237, 1.734]}
            scale={0.599}
          />
          <mesh
            name="REED003_84"
            castShadow
            receiveShadow
            geometry={nodes.REED003_84.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.395, 0.056, 0.458]}
            rotation={[1.547, 0.105, 3.064]}
            scale={0.606}
          />
          <mesh
            name="REED001_85"
            castShadow
            receiveShadow
            geometry={nodes.REED001_85.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.41, 0.052, 0.481]}
            rotation={[1.635, -0.276, 2.344]}
            scale={0.522}
          />
          <mesh
            name="REED002_85"
            castShadow
            receiveShadow
            geometry={nodes.REED002_85.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.419, 0.053, 0.465]}
            rotation={[1.623, 0.023, 0.572]}
            scale={0.852}
          />
          <mesh
            name="REED003_85"
            castShadow
            receiveShadow
            geometry={nodes.REED003_85.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.395, 0.056, 0.458]}
            rotation={[1.359, -0.104, 1.453]}
            scale={0.645}
          />
          <mesh
            name="REED001_86"
            castShadow
            receiveShadow
            geometry={nodes.REED001_86.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.41, 0.052, 0.481]}
            rotation={[1.446, -0.066, -0.151]}
            scale={0.837}
          />
          <mesh
            name="REED002_86"
            castShadow
            receiveShadow
            geometry={nodes.REED002_86.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.392, 0.055, 0.433]}
            rotation={[1.568, 0.186, 2.015]}
            scale={0.519}
          />
          <mesh
            name="REED003_86"
            castShadow
            receiveShadow
            geometry={nodes.REED003_86.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.367, 0.054, 0.425]}
            rotation={[1.742, 0.128, -2.701]}
            scale={0.35}
          />
          <mesh
            name="REED001_87"
            castShadow
            receiveShadow
            geometry={nodes.REED001_87.geometry}
            material={materials["TREE GREEN"]}
            position={[0.679, 0.05, -0.254]}
            rotation={[1.677, -0.252, -2.696]}
            scale={0.888}
          />
          <mesh
            name="REED002_87"
            castShadow
            receiveShadow
            geometry={nodes.REED002_87.geometry}
            material={materials["TREE GREEN"]}
            position={[0.653, 0.052, -0.256]}
            rotation={[1.499, -0.133, 1.704]}
            scale={0.578}
          />
          <mesh
            name="REED003_87"
            castShadow
            receiveShadow
            geometry={nodes.REED003_87.geometry}
            material={materials["TREE GREEN"]}
            position={[0.646, 0.054, -0.221]}
            rotation={[1.432, 0.184, -1.787]}
            scale={0.444}
          />
          <mesh
            name="REED001_88"
            castShadow
            receiveShadow
            geometry={nodes.REED001_88.geometry}
            material={materials["TREE GREEN"]}
            position={[0.629, 0.052, -0.197]}
            rotation={[1.682, 0.17, 2.739]}
            scale={0.82}
          />
          <mesh
            name="REED002_88"
            castShadow
            receiveShadow
            geometry={nodes.REED002_88.geometry}
            material={materials["TREE GREEN"]}
            position={[0.644, 0.052, -0.192]}
            rotation={[1.662, -0.242, 0.823]}
            scale={0.733}
          />
          <mesh
            name="REED003_88"
            castShadow
            receiveShadow
            geometry={nodes.REED003_88.geometry}
            material={materials["TREE GREEN"]}
            position={[0.686, 0.054, -0.215]}
            rotation={[1.401, -0.101, 0.407]}
            scale={0.489}
          />
          <mesh
            name="REED001_89"
            castShadow
            receiveShadow
            geometry={nodes.REED001_89.geometry}
            material={materials["TREE GREEN"]}
            position={[0.671, 0.052, -0.191]}
            rotation={[1.557, 0.145, 0.369]}
            scale={0.695}
          />
          <mesh
            name="REED002_89"
            castShadow
            receiveShadow
            geometry={nodes.REED002_89.geometry}
            material={materials["TREE GREEN"]}
            position={[0.691, 0.05, -0.248]}
            rotation={[1.636, 0.168, 1.824]}
            scale={0.525}
          />
          <mesh
            name="REED003_89"
            castShadow
            receiveShadow
            geometry={nodes.REED003_89.geometry}
            material={materials["TREE GREEN"]}
            position={[0.705, 0.05, -0.24]}
            rotation={[1.194, -0.058, -2.381]}
            scale={0.698}
          />
          <mesh
            name="REED001_90"
            castShadow
            receiveShadow
            geometry={nodes.REED001_90.geometry}
            material={materials["TREE GREEN"]}
            position={[0.573, 0.055, -0.115]}
            rotation={[1.618, 0.029, -1.037]}
            scale={0.709}
          />
          <mesh
            name="REED002_90"
            castShadow
            receiveShadow
            geometry={nodes.REED002_90.geometry}
            material={materials["TREE GREEN"]}
            position={[0.577, 0.055, -0.14]}
            rotation={[1.564, -0.079, 0.441]}
            scale={0.543}
          />
          <mesh
            name="REED003_90"
            castShadow
            receiveShadow
            geometry={nodes.REED003_90.geometry}
            material={materials["TREE GREEN"]}
            position={[0.632, 0.051, -0.159]}
            rotation={[1.446, -0.233, -2.941]}
            scale={0.618}
          />
          <mesh
            name="REED001_91"
            castShadow
            receiveShadow
            geometry={nodes.REED001_91.geometry}
            material={materials["TREE GREEN"]}
            position={[0.185, 0.052, -0.005]}
            rotation={[1.298, -0.045, 0.472]}
            scale={0.83}
          />
          <mesh
            name="REED002_91"
            castShadow
            receiveShadow
            geometry={nodes.REED002_91.geometry}
            material={materials["TREE GREEN"]}
            position={[0.194, 0.05, -0.018]}
            rotation={[1.4, -0.029, 0.815]}
            scale={0.802}
          />
          <mesh
            name="REED003_91"
            castShadow
            receiveShadow
            geometry={nodes.REED003_91.geometry}
            material={materials["TREE GREEN"]}
            position={[0.272, 0.054, -0.03]}
            rotation={[1.37, 0.07, 2.529]}
            scale={0.526}
          />
          <mesh
            name="REED001_92"
            castShadow
            receiveShadow
            geometry={nodes.REED001_92.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.354, 0.053, 0.494]}
            rotation={[1.39, 0.024, -0.723]}
            scale={0.696}
          />
          <mesh
            name="REED002_92"
            castShadow
            receiveShadow
            geometry={nodes.REED002_92.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.362, 0.055, 0.482]}
            rotation={[1.763, -0.061, 0.904]}
            scale={0.531}
          />
          <mesh
            name="REED003_92"
            castShadow
            receiveShadow
            geometry={nodes.REED003_92.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.364, 0.053, 0.503]}
            rotation={[1.787, -0.163, -2.369]}
            scale={0.502}
          />
          <mesh
            name="REED001_93"
            castShadow
            receiveShadow
            geometry={nodes.REED001_93.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.376, 0.051, 0.522]}
            rotation={[1.852, -0.073, 0.974]}
            scale={0.734}
          />
          <mesh
            name="REED002_93"
            castShadow
            receiveShadow
            geometry={nodes.REED002_93.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.385, 0.053, 0.51]}
            rotation={[1.803, -0.181, -0.455]}
            scale={0.678}
          />
          <mesh
            name="REED003_93"
            castShadow
            receiveShadow
            geometry={nodes.REED003_93.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.312, 0.052, 0.473]}
            rotation={[1.667, -0.24, 1.915]}
            scale={0.383}
          />
          <mesh
            name="REED001_94"
            castShadow
            receiveShadow
            geometry={nodes.REED001_94.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.326, 0.051, 0.496]}
            rotation={[1.806, -0.181, -1.544]}
            scale={0.917}
          />
          <mesh
            name="REED002_94"
            castShadow
            receiveShadow
            geometry={nodes.REED002_94.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.335, 0.053, 0.485]}
            rotation={[1.868, -0.253, -1.11]}
            scale={0.795}
          />
          <mesh
            name="REED003_94"
            castShadow
            receiveShadow
            geometry={nodes.REED003_94.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.336, 0.051, 0.505]}
            rotation={[1.521, -0.353, 0.3]}
            scale={0.509}
          />
          <mesh
            name="REED001_95"
            castShadow
            receiveShadow
            geometry={nodes.REED001_95.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.382, 0.054, 0.489]}
            rotation={[1.599, -0.132, 2.592]}
            scale={0.907}
          />
          <mesh
            name="REED002_95"
            castShadow
            receiveShadow
            geometry={nodes.REED002_95.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.308, 0.051, 0.486]}
            rotation={[1.861, 0.025, 1.943]}
            scale={0.686}
          />
          <mesh
            name="REED003_95"
            castShadow
            receiveShadow
            geometry={nodes.REED003_95.geometry}
            material={materials["TREE GREEN"]}
            position={[0.726, 0.051, -0.17]}
            rotation={[1.64, -0.022, -2.962]}
            scale={0.354}
          />
          <mesh
            name="REED001_96"
            castShadow
            receiveShadow
            geometry={nodes.REED001_96.geometry}
            material={materials["TREE GREEN"]}
            position={[0.69, 0.051, -0.124]}
            rotation={[1.508, 0.306, -2.466]}
            scale={0.654}
          />
          <mesh
            name="REED002_96"
            castShadow
            receiveShadow
            geometry={nodes.REED002_96.geometry}
            material={materials["TREE GREEN"]}
            position={[0.693, 0.051, -0.152]}
            rotation={[1.653, -0.045, 0.894]}
            scale={0.577}
          />
          <mesh
            name="REED003_96"
            castShadow
            receiveShadow
            geometry={nodes.REED003_96.geometry}
            material={materials["TREE GREEN"]}
            position={[0.706, 0.051, -0.146]}
            rotation={[1.303, 0.046, 1.284]}
            scale={0.352}
          />
          <mesh
            name="REED001_97"
            castShadow
            receiveShadow
            geometry={nodes.REED001_97.geometry}
            material={materials["TREE GREEN"]}
            position={[0.719, 0.052, -0.116]}
            rotation={[1.465, 0.126, 0.883]}
            scale={0.546}
          />
          <mesh
            name="REED002_97"
            castShadow
            receiveShadow
            geometry={nodes.REED002_97.geometry}
            material={materials["TREE GREEN"]}
            position={[0.705, 0.052, -0.212]}
            rotation={[1.783, -0.047, -0.186]}
            scale={0.455}
          />
          <mesh
            name="REED003_97"
            castShadow
            receiveShadow
            geometry={nodes.REED003_97.geometry}
            material={materials["TREE GREEN"]}
            position={[0.718, 0.051, -0.205]}
            rotation={[1.399, -0.106, 0.191]}
            scale={0.385}
          />
          <mesh
            name="REED001_98"
            castShadow
            receiveShadow
            geometry={nodes.REED001_98.geometry}
            material={materials["TREE GREEN"]}
            position={[0.682, 0.051, -0.157]}
            rotation={[1.746, 0.16, -0.077]}
            scale={0.787}
          />
          <mesh
            name="REED002_98"
            castShadow
            receiveShadow
            geometry={nodes.REED002_98.geometry}
            material={materials["TREE GREEN"]}
            position={[0.683, 0.053, -0.186]}
            rotation={[1.506, -0.078, 1.164]}
            scale={0.645}
          />
          <mesh
            name="REED003_98"
            castShadow
            receiveShadow
            geometry={nodes.REED003_98.geometry}
            material={materials["TREE GREEN"]}
            position={[0.673, 0.051, -0.153]}
            rotation={[1.53, 0.039, 0.739]}
            scale={0.645}
          />
          <mesh
            name="REED001_99"
            castShadow
            receiveShadow
            geometry={nodes.REED001_99.geometry}
            material={materials["TREE GREEN"]}
            position={[0.654, 0.052, -0.131]}
            rotation={[1.636, 0.311, -1.924]}
            scale={0.468}
          />
          <mesh
            name="REED002_99"
            castShadow
            receiveShadow
            geometry={nodes.REED002_99.geometry}
            material={materials["TREE GREEN"]}
            position={[0.666, 0.051, -0.126]}
            rotation={[1.767, -0.147, 3.089]}
            scale={0.806}
          />
          <mesh
            name="REED003_99"
            castShadow
            receiveShadow
            geometry={nodes.REED003_99.geometry}
            material={materials["TREE GREEN"]}
            position={[0.681, 0.051, -0.12]}
            rotation={[1.448, -0.098, 2.843]}
            scale={0.49}
          />
          <mesh
            name="REED001_100"
            castShadow
            receiveShadow
            geometry={nodes.REED001_100.geometry}
            material={materials["TREE GREEN"]}
            position={[0.662, 0.051, -0.099]}
            rotation={[1.507, 0.004, 2.407]}
            scale={0.92}
          />
          <mesh
            name="REED002_100"
            castShadow
            receiveShadow
            geometry={nodes.REED002_100.geometry}
            material={materials["TREE GREEN"]}
            position={[0.666, 0.051, -0.126]}
            rotation={[1.339, -0.175, -2.558]}
            scale={0.575}
          />
          <mesh
            name="REED003_100"
            castShadow
            receiveShadow
            geometry={nodes.REED003_100.geometry}
            material={materials["TREE GREEN"]}
            position={[0.686, 0.054, -0.089]}
            rotation={[1.459, 0.349, -1.545]}
            scale={0.47}
          />
          <mesh
            name="REED001_101"
            castShadow
            receiveShadow
            geometry={nodes.REED001_101.geometry}
            material={materials["TREE GREEN"]}
            position={[0.666, 0.054, -0.069]}
            rotation={[1.537, 0.231, 1.644]}
            scale={0.767}
          />
          <mesh
            name="REED002_101"
            castShadow
            receiveShadow
            geometry={nodes.REED002_101.geometry}
            material={materials["TREE GREEN"]}
            position={[0.673, 0.052, -0.095]}
            rotation={[1.651, 0.186, -2.772]}
            scale={0.935}
          />
          <mesh
            name="REED003_101"
            castShadow
            receiveShadow
            geometry={nodes.REED003_101.geometry}
            material={materials["TREE GREEN"]}
            position={[0.686, 0.054, -0.089]}
            rotation={[1.563, -0.062, -2.485]}
            scale={0.727}
          />
          <mesh
            name="REED001_102"
            castShadow
            receiveShadow
            geometry={nodes.REED001_102.geometry}
            material={materials["TREE GREEN"]}
            position={[0.666, 0.054, -0.069]}
            rotation={[1.303, 0.12, 1.282]}
            scale={0.552}
          />
          <mesh
            name="REED002_102"
            castShadow
            receiveShadow
            geometry={nodes.REED002_102.geometry}
            material={materials["TREE GREEN"]}
            position={[0.673, 0.052, -0.095]}
            rotation={[1.521, 0.238, 1.371]}
            scale={0.753}
          />
          <mesh
            name="REED003_102"
            castShadow
            receiveShadow
            geometry={nodes.REED003_102.geometry}
            material={materials["TREE GREEN"]}
            position={[0.686, 0.054, -0.089]}
            rotation={[1.693, -0.181, 2.557]}
            scale={0.735}
          />
          <mesh
            name="REED001_103"
            castShadow
            receiveShadow
            geometry={nodes.REED001_103.geometry}
            material={materials["TREE GREEN"]}
            position={[0.668, 0.052, -0.041]}
            rotation={[1.541, 0.004, -0.122]}
            scale={0.49}
          />
          <mesh
            name="REED002_103"
            castShadow
            receiveShadow
            geometry={nodes.REED002_103.geometry}
            material={materials["TREE GREEN"]}
            position={[0.676, 0.054, -0.065]}
            rotation={[1.468, 0.019, 1.477]}
            scale={0.453}
          />
          <mesh
            name="REED003_103"
            castShadow
            receiveShadow
            geometry={nodes.REED003_103.geometry}
            material={materials["TREE GREEN"]}
            position={[0.713, 0.055, -0.082]}
            rotation={[1.396, -0.262, -1.161]}
            scale={0.667}
          />
          <mesh
            name="REED001_104"
            castShadow
            receiveShadow
            geometry={nodes.REED001_104.geometry}
            material={materials["TREE GREEN"]}
            position={[0.591, 0.049, -0.058]}
            rotation={[1.358, -0.18, -0.933]}
            scale={0.886}
          />
          <mesh
            name="REED002_104"
            castShadow
            receiveShadow
            geometry={nodes.REED002_104.geometry}
            material={materials["TREE GREEN"]}
            position={[0.599, 0.051, -0.081]}
            rotation={[1.645, 0.11, 0.044]}
            scale={0.649}
          />
          <mesh
            name="REED003_104"
            castShadow
            receiveShadow
            geometry={nodes.REED003_104.geometry}
            material={materials["TREE GREEN"]}
            position={[0.579, 0.049, -0.056]}
            rotation={[1.508, 0.308, 2.103]}
            scale={0.699}
          />
          <mesh
            name="REED001_105"
            castShadow
            receiveShadow
            geometry={nodes.REED001_105.geometry}
            material={materials["TREE GREEN"]}
            position={[0.551, 0.048, -0.042]}
            rotation={[1.31, 0.015, 0.475]}
            scale={0.698}
          />
          <mesh
            name="REED002_105"
            castShadow
            receiveShadow
            geometry={nodes.REED002_105.geometry}
            material={materials["TREE GREEN"]}
            position={[0.606, 0.05, -0.053]}
            rotation={[1.635, 0.185, -0.716]}
            scale={0.657}
          />
          <mesh
            name="REED003_105"
            castShadow
            receiveShadow
            geometry={nodes.REED003_105.geometry}
            material={materials["TREE GREEN"]}
            position={[0.585, 0.048, -0.029]}
            rotation={[1.495, 0.22, -3.128]}
            scale={0.539}
          />
          <mesh
            name="REED001_106"
            castShadow
            receiveShadow
            geometry={nodes.REED001_106.geometry}
            material={materials["TREE GREEN"]}
            position={[0.557, 0.051, -0.017]}
            rotation={[1.625, -0.074, -2.591]}
            scale={0.658}
          />
          <mesh
            name="REED002_106"
            castShadow
            receiveShadow
            geometry={nodes.REED002_106.geometry}
            material={materials["TREE GREEN"]}
            position={[0.59, 0.054, -0.11]}
            rotation={[1.619, -0.177, 2.114]}
            scale={0.684}
          />
          <mesh
            name="REED003_106"
            castShadow
            receiveShadow
            geometry={nodes.REED003_106.geometry}
            material={materials["TREE GREEN"]}
            position={[0.609, 0.052, -0.103]}
            rotation={[1.788, -0.064, -0.683]}
            scale={0.587}
          />
          <mesh
            name="REED001_107"
            castShadow
            receiveShadow
            geometry={nodes.REED001_107.geometry}
            material={materials["TREE GREEN"]}
            position={[0.584, 0.052, -0.086]}
            rotation={[1.494, 0.13, 0.758]}
            scale={0.901}
          />
          <mesh
            name="REED002_107"
            castShadow
            receiveShadow
            geometry={nodes.REED002_107.geometry}
            material={materials["TREE GREEN"]}
            position={[0.59, 0.054, -0.11]}
            rotation={[1.558, -0.129, 2.346]}
            scale={0.667}
          />
          <mesh
            name="REED003_107"
            castShadow
            receiveShadow
            geometry={nodes.REED003_107.geometry}
            material={materials["TREE GREEN"]}
            position={[0.609, 0.052, -0.103]}
            rotation={[1.518, -0.288, 0.563]}
            scale={0.602}
          />
          <mesh
            name="REED001_108"
            castShadow
            receiveShadow
            geometry={nodes.REED001_108.geometry}
            material={materials["TREE GREEN"]}
            position={[0.584, 0.052, -0.086]}
            rotation={[1.575, 0.104, -1.26]}
            scale={0.811}
          />
          <mesh
            name="REED002_108"
            castShadow
            receiveShadow
            geometry={nodes.REED002_108.geometry}
            material={materials["TREE GREEN"]}
            position={[0.59, 0.054, -0.11]}
            rotation={[1.32, -0.079, 1.588]}
            scale={0.607}
          />
          <mesh
            name="REED003_108"
            castShadow
            receiveShadow
            geometry={nodes.REED003_108.geometry}
            material={materials["TREE GREEN"]}
            position={[0.625, 0.051, -0.019]}
            rotation={[1.5, 0.054, 2.159]}
            scale={0.432}
          />
          <mesh
            name="REED001_109"
            castShadow
            receiveShadow
            geometry={nodes.REED001_109.geometry}
            material={materials["TREE GREEN"]}
            position={[0.636, 0.051, -0.022]}
            rotation={[1.767, 0.002, -2.136]}
            scale={0.66}
          />
          <mesh
            name="REED002_109"
            castShadow
            receiveShadow
            geometry={nodes.REED002_109.geometry}
            material={materials["TREE GREEN"]}
            position={[0.645, 0.052, -0.044]}
            rotation={[1.671, 0.064, -2.998]}
            scale={0.548}
          />
          <mesh
            name="REED003_109"
            castShadow
            receiveShadow
            geometry={nodes.REED003_109.geometry}
            material={materials["TREE GREEN"]}
            position={[0.651, 0.052, -0.096]}
            rotation={[1.272, 0.053, 0.106]}
            scale={0.494}
          />
          <mesh
            name="REED001_110"
            castShadow
            receiveShadow
            geometry={nodes.REED001_110.geometry}
            material={materials["TREE GREEN"]}
            position={[0.629, 0.052, -0.077]}
            rotation={[1.725, 0.312, 1.185]}
            scale={0.821}
          />
          <mesh
            name="REED002_110"
            castShadow
            receiveShadow
            geometry={nodes.REED002_110.geometry}
            material={materials["TREE GREEN"]}
            position={[0.635, 0.052, -0.102]}
            rotation={[1.654, 0.051, -0.066]}
            scale={0.523}
          />
          <mesh
            name="REED003_110"
            castShadow
            receiveShadow
            geometry={nodes.REED003_110.geometry}
            material={materials["TREE GREEN"]}
            position={[0.335, 0.055, -0.023]}
            rotation={[1.518, -0.179, -0.097]}
            scale={0.5}
          />
          <mesh
            name="REED001_111"
            castShadow
            receiveShadow
            geometry={nodes.REED001_111.geometry}
            material={materials["TREE GREEN"]}
            position={[0.311, 0.052, 0.004]}
            rotation={[1.713, -0.111, -1.343]}
            scale={0.868}
          />
          <mesh
            name="REED002_111"
            castShadow
            receiveShadow
            geometry={nodes.REED002_111.geometry}
            material={materials["TREE GREEN"]}
            position={[0.219, 0.053, 0.01]}
            rotation={[1.345, 0.149, -0.934]}
            scale={0.96}
          />
          <mesh
            name="REED003_111"
            castShadow
            receiveShadow
            geometry={nodes.REED003_111.geometry}
            material={materials["TREE GREEN"]}
            position={[0.258, 0.054, 0.031]}
            rotation={[1.47, 0.135, -1.487]}
            scale={0.39}
          />
          <mesh
            name="REED001_112"
            castShadow
            receiveShadow
            geometry={nodes.REED001_112.geometry}
            material={materials["TREE GREEN"]}
            position={[0.225, 0.054, 0.039]}
            rotation={[1.788, 0.004, -2.704]}
            scale={0.699}
          />
          <mesh
            name="REED002_112"
            castShadow
            receiveShadow
            geometry={nodes.REED002_112.geometry}
            material={materials["TREE GREEN"]}
            position={[0.232, 0.053, 0.026]}
            rotation={[1.404, 0.053, -0.056]}
            scale={0.685}
          />
          <mesh
            name="REED003_112"
            castShadow
            receiveShadow
            geometry={nodes.REED003_112.geometry}
            material={materials["TREE GREEN"]}
            position={[0.258, 0.054, 0.031]}
            rotation={[1.439, -0.046, -2.491]}
            scale={0.724}
          />
          <mesh
            name="REED001_113"
            castShadow
            receiveShadow
            geometry={nodes.REED001_113.geometry}
            material={materials["TREE GREEN"]}
            position={[0.225, 0.054, 0.039]}
            rotation={[1.765, 0.215, -2.268]}
            scale={0.66}
          />
          <mesh
            name="REED002_113"
            castShadow
            receiveShadow
            geometry={nodes.REED002_113.geometry}
            material={materials["TREE GREEN"]}
            position={[0.184, 0.055, 0.038]}
            rotation={[1.581, -0.121, -1.792]}
            scale={0.769}
          />
          <mesh
            name="REED003_113"
            castShadow
            receiveShadow
            geometry={nodes.REED003_113.geometry}
            material={materials["TREE GREEN"]}
            position={[0.21, 0.054, 0.041]}
            rotation={[1.391, -0.02, 2.654]}
            scale={0.728}
          />
          <mesh
            name="REED001_114"
            castShadow
            receiveShadow
            geometry={nodes.REED001_114.geometry}
            material={materials["TREE GREEN"]}
            position={[0.179, 0.054, 0.05]}
            rotation={[1.333, 0.049, 3.023]}
            scale={0.814}
          />
          <mesh
            name="REED002_114"
            castShadow
            receiveShadow
            geometry={nodes.REED002_114.geometry}
            material={materials["TREE GREEN"]}
            position={[0.258, 0.053, -0.017]}
            rotation={[1.579, 0.033, 1.53]}
            scale={0.547}
          />
          <mesh
            name="REED003_114"
            castShadow
            receiveShadow
            geometry={nodes.REED003_114.geometry}
            material={materials["TREE GREEN"]}
            position={[0.283, 0.053, -0.013]}
            rotation={[1.861, -0.165, -0.281]}
            scale={0.682}
          />
          <mesh
            name="REED001_115"
            castShadow
            receiveShadow
            geometry={nodes.REED001_115.geometry}
            material={materials["TREE GREEN"]}
            position={[0.198, 0.054, 0.008]}
            rotation={[1.738, -0.139, -1.058]}
            scale={0.67}
          />
          <mesh
            name="REED002_115"
            castShadow
            receiveShadow
            geometry={nodes.REED002_115.geometry}
            material={materials["TREE GREEN"]}
            position={[0.156, 0.053, 0.067]}
            rotation={[1.474, 0.174, 1.234]}
            scale={0.905}
          />
          <mesh
            name="REED003_115"
            castShadow
            receiveShadow
            geometry={nodes.REED003_115.geometry}
            material={materials["TREE GREEN"]}
            position={[0.225, 0.053, 0.058]}
            rotation={[1.511, 0.136, -1.721]}
            scale={0.674}
          />
          <mesh
            name="REED001_116"
            castShadow
            receiveShadow
            geometry={nodes.REED001_116.geometry}
            material={materials["TREE GREEN"]}
            position={[0.196, 0.053, 0.068]}
            rotation={[1.493, -0.304, 1.011]}
            scale={0.455}
          />
          <mesh
            name="REED002_116"
            castShadow
            receiveShadow
            geometry={nodes.REED002_116.geometry}
            material={materials["TREE GREEN"]}
            position={[0.2, 0.054, 0.054]}
            rotation={[1.536, -0.067, -1.188]}
            scale={0.677}
          />
          <mesh
            name="REED003_116"
            castShadow
            receiveShadow
            geometry={nodes.REED003_116.geometry}
            material={materials["TREE GREEN"]}
            position={[0.272, 0.055, 0.05]}
            rotation={[1.609, -0.011, 2.012]}
            scale={0.583}
          />
          <mesh
            name="REED001_117"
            castShadow
            receiveShadow
            geometry={nodes.REED001_117.geometry}
            material={materials["TREE GREEN"]}
            position={[0.241, 0.053, 0.058]}
            rotation={[1.524, 0.299, 2.212]}
            scale={0.696}
          />
          <mesh
            name="REED002_117"
            castShadow
            receiveShadow
            geometry={nodes.REED002_117.geometry}
            material={materials["TREE GREEN"]}
            position={[0.247, 0.054, 0.044]}
            rotation={[1.475, 0.154, -0.232]}
            scale={0.561}
          />
          <mesh
            name="REED003_117"
            castShadow
            receiveShadow
            geometry={nodes.REED003_117.geometry}
            material={materials["TREE GREEN"]}
            position={[0.32, 0.052, 0.043]}
            rotation={[1.793, -0.036, -0.005]}
            scale={0.714}
          />
          <mesh
            name="REED001_118"
            castShadow
            receiveShadow
            geometry={nodes.REED001_118.geometry}
            material={materials["TREE GREEN"]}
            position={[0.288, 0.055, 0.05]}
            rotation={[1.561, -0.028, -0.869]}
            scale={0.833}
          />
          <mesh
            name="REED002_118"
            castShadow
            receiveShadow
            geometry={nodes.REED002_118.geometry}
            material={materials["TREE GREEN"]}
            position={[0.295, 0.053, 0.036]}
            rotation={[1.553, -0.238, -0.46]}
            scale={0.689}
          />
          <mesh
            name="REED003_118"
            castShadow
            receiveShadow
            geometry={nodes.REED003_118.geometry}
            material={materials["TREE GREEN"]}
            position={[0.307, 0.052, 0.023]}
            rotation={[1.475, -0.16, 2.147]}
            scale={0.728}
          />
          <mesh
            name="REED001_119"
            castShadow
            receiveShadow
            geometry={nodes.REED001_119.geometry}
            material={materials["TREE GREEN"]}
            position={[0.274, 0.054, 0.03]}
            rotation={[1.536, 0.272, 3.005]}
            scale={0.734}
          />
          <mesh
            name="REED002_119"
            castShadow
            receiveShadow
            geometry={nodes.REED002_119.geometry}
            material={materials["TREE GREEN"]}
            position={[0.282, 0.052, 0.017]}
            rotation={[1.725, 0.018, -0.292]}
            scale={0.738}
          />
          <mesh
            name="REED003_119"
            castShadow
            receiveShadow
            geometry={nodes.REED003_119.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.283, 0.049, 0.501]}
            rotation={[1.594, -0.203, 2.135]}
            scale={0.727}
          />
          <mesh
            name="REED001_120"
            castShadow
            receiveShadow
            geometry={nodes.REED001_120.geometry}
            material={materials["TREE GREEN"]}
            position={[0.667, 0.053, -0.014]}
            rotation={[1.601, 0.168, -2.57]}
            scale={0.637}
          />
          <mesh
            name="REED002_120"
            castShadow
            receiveShadow
            geometry={nodes.REED002_120.geometry}
            material={materials["TREE GREEN"]}
            position={[0.677, 0.053, -0.036]}
            rotation={[1.543, 0.048, 1.812]}
            scale={0.94}
          />
          <mesh
            name="REED003_120"
            castShadow
            receiveShadow
            geometry={nodes.REED003_120.geometry}
            material={materials["TREE GREEN"]}
            position={[0.687, 0.054, -0.031]}
            rotation={[1.422, 0.17, 1.993]}
            scale={0.514}
          />
          <mesh
            name="REED001_121"
            castShadow
            receiveShadow
            geometry={nodes.REED001_121.geometry}
            material={materials["TREE GREEN"]}
            position={[0.665, 0.054, 0.011]}
            rotation={[1.526, 0.092, 0.403]}
            scale={0.612}
          />
          <mesh
            name="REED002_121"
            castShadow
            receiveShadow
            geometry={nodes.REED002_121.geometry}
            material={materials["TREE GREEN"]}
            position={[0.613, 0.051, 0.024]}
            rotation={[1.377, 0.227, -0.722]}
            scale={0.92}
          />
          <mesh
            name="REED003_121"
            castShadow
            receiveShadow
            geometry={nodes.REED003_121.geometry}
            material={materials["TREE GREEN"]}
            position={[0.625, 0.051, 0.03]}
            rotation={[1.408, -0.134, -1.294]}
            scale={0.496}
          />
          <mesh
            name="REED001_122"
            castShadow
            receiveShadow
            geometry={nodes.REED001_122.geometry}
            material={materials["TREE GREEN"]}
            position={[0.602, 0.051, 0.042]}
            rotation={[1.746, -0.102, 0.18]}
            scale={0.497}
          />
          <mesh
            name="REED002_122"
            castShadow
            receiveShadow
            geometry={nodes.REED002_122.geometry}
            material={materials["TREE GREEN"]}
            position={[0.577, 0.053, 0.037]}
            rotation={[1.454, 0.117, 1.09]}
            scale={0.795}
          />
          <mesh
            name="REED003_122"
            castShadow
            receiveShadow
            geometry={nodes.REED003_122.geometry}
            material={materials["TREE GREEN"]}
            position={[0.591, 0.051, 0.063]}
            rotation={[1.883, 0.035, 1.236]}
            scale={0.439}
          />
          <mesh
            name="REED001_123"
            castShadow
            receiveShadow
            geometry={nodes.REED001_123.geometry}
            material={materials["TREE GREEN"]}
            position={[0.636, 0.052, 0.004]}
            rotation={[1.536, 0.097, 2.152]}
            scale={0.46}
          />
          <mesh
            name="REED002_123"
            castShadow
            receiveShadow
            geometry={nodes.REED002_123.geometry}
            material={materials["TREE GREEN"]}
            position={[0.646, 0.052, -0.017]}
            rotation={[1.418, -0.077, 2.547]}
            scale={0.854}
          />
          <mesh
            name="REED003_123"
            castShadow
            receiveShadow
            geometry={nodes.REED003_123.geometry}
            material={materials["TREE GREEN"]}
            position={[0.658, 0.053, -0.011]}
            rotation={[1.414, -0.056, -2.574]}
            scale={0.735}
          />
          <mesh
            name="REED001_124"
            castShadow
            receiveShadow
            geometry={nodes.REED001_124.geometry}
            material={materials["TREE GREEN"]}
            position={[0.636, 0.052, 0.004]}
            rotation={[1.379, 0.099, 2.618]}
            scale={0.848}
          />
          <mesh
            name="REED002_124"
            castShadow
            receiveShadow
            geometry={nodes.REED002_124.geometry}
            material={materials["TREE GREEN"]}
            position={[0.612, 0.051, 0]}
            rotation={[1.328, -0.089, -2.249]}
            scale={0.77}
          />
          <mesh
            name="REED003_124"
            castShadow
            receiveShadow
            geometry={nodes.REED003_124.geometry}
            material={materials["TREE GREEN"]}
            position={[0.626, 0.052, 0.006]}
            rotation={[1.483, -0.004, -2.399]}
            scale={0.701}
          />
          <mesh
            name="REED001_125"
            castShadow
            receiveShadow
            geometry={nodes.REED001_125.geometry}
            material={materials["TREE GREEN"]}
            position={[0.602, 0.052, 0.019]}
            rotation={[1.418, -0.228, -2.823]}
            scale={0.49}
          />
          <mesh
            name="REED002_125"
            castShadow
            receiveShadow
            geometry={nodes.REED002_125.geometry}
            material={materials["TREE GREEN"]}
            position={[0.612, 0.051, 0]}
            rotation={[1.597, 0.315, -2.635]}
            scale={0.648}
          />
          <mesh
            name="REED003_125"
            castShadow
            receiveShadow
            geometry={nodes.REED003_125.geometry}
            material={materials["TREE GREEN"]}
            position={[0.59, 0.052, 0.021]}
            rotation={[1.618, -0.065, -2.742]}
            scale={0.693}
          />
          <mesh
            name="REED001_126"
            castShadow
            receiveShadow
            geometry={nodes.REED001_126.geometry}
            material={materials["TREE GREEN"]}
            position={[0.564, 0.053, 0.032]}
            rotation={[1.475, -0.249, -2.127]}
            scale={0.865}
          />
          <mesh
            name="REED002_126"
            castShadow
            receiveShadow
            geometry={nodes.REED002_126.geometry}
            material={materials["TREE GREEN"]}
            position={[0.578, 0.051, 0.076]}
            rotation={[1.62, -0.386, -0.791]}
            scale={0.918}
          />
          <mesh
            name="REED003_126"
            castShadow
            receiveShadow
            geometry={nodes.REED003_126.geometry}
            material={materials["TREE GREEN"]}
            position={[0.654, 0.051, 0.034]}
            rotation={[1.638, -0.117, -1.807]}
            scale={0.614}
          />
          <mesh
            name="REED001_127"
            castShadow
            receiveShadow
            geometry={nodes.REED001_127.geometry}
            material={materials["TREE GREEN"]}
            position={[0.635, 0.051, 0.028]}
            rotation={[1.634, 0.19, -1.115]}
            scale={0.934}
          />
          <mesh
            name="REED002_127"
            castShadow
            receiveShadow
            geometry={nodes.REED002_127.geometry}
            material={materials["TREE GREEN"]}
            position={[0.646, 0.052, 0.008]}
            rotation={[1.475, 0.169, -1.209]}
            scale={0.709}
          />
          <mesh
            name="REED003_127"
            castShadow
            receiveShadow
            geometry={nodes.REED003_127.geometry}
            material={materials["TREE GREEN"]}
            position={[0.378, 0.049, 0.059]}
            rotation={[1.585, 0.089, -2.233]}
            scale={0.51}
          />
          <mesh
            name="REED001_128"
            castShadow
            receiveShadow
            geometry={nodes.REED001_128.geometry}
            material={materials["TREE GREEN"]}
            position={[0.348, 0.051, 0.065]}
            rotation={[1.465, 0.166, 0.434]}
            scale={0.522}
          />
          <mesh
            name="REED002_128"
            castShadow
            receiveShadow
            geometry={nodes.REED002_128.geometry}
            material={materials["TREE GREEN"]}
            position={[0.367, 0.05, 0.072]}
            rotation={[1.748, -0.248, 0.448]}
            scale={0.783}
          />
          <mesh
            name="REED003_128"
            castShadow
            receiveShadow
            geometry={nodes.REED003_128.geometry}
            material={materials["TREE GREEN"]}
            position={[0.302, 0.05, 0.092]}
            rotation={[1.77, -0.088, -1.911]}
            scale={0.741}
          />
          <mesh
            name="REED001_129"
            castShadow
            receiveShadow
            geometry={nodes.REED001_129.geometry}
            material={materials["TREE GREEN"]}
            position={[0.274, 0.055, 0.099]}
            rotation={[1.482, -0.017, -2.562]}
            scale={0.897}
          />
          <mesh
            name="REED002_129"
            castShadow
            receiveShadow
            geometry={nodes.REED002_129.geometry}
            material={materials["TREE GREEN"]}
            position={[0.278, 0.054, 0.084]}
            rotation={[1.83, 0.107, 1.004]}
            scale={0.745}
          />
          <mesh
            name="REED003_129"
            castShadow
            receiveShadow
            geometry={nodes.REED003_129.geometry}
            material={materials["TREE GREEN"]}
            position={[0.259, 0.055, 0.099]}
            rotation={[1.507, -0.093, 2.007]}
            scale={0.601}
          />
          <mesh
            name="REED001_130"
            castShadow
            receiveShadow
            geometry={nodes.REED001_130.geometry}
            material={materials["TREE GREEN"]}
            position={[0.232, 0.052, 0.107]}
            rotation={[1.689, 0.325, -2.993]}
            scale={0.874}
          />
          <mesh
            name="REED002_130"
            castShadow
            receiveShadow
            geometry={nodes.REED002_130.geometry}
            material={materials["TREE GREEN"]}
            position={[0.235, 0.052, 0.092]}
            rotation={[1.634, 0.059, 2.004]}
            scale={0.76}
          />
          <mesh
            name="REED003_130"
            castShadow
            receiveShadow
            geometry={nodes.REED003_130.geometry}
            material={materials["TREE GREEN"]}
            position={[0.316, 0.05, 0.111]}
            rotation={[1.503, -0.249, -2.097]}
            scale={0.661}
          />
          <mesh
            name="REED001_131"
            castShadow
            receiveShadow
            geometry={nodes.REED001_131.geometry}
            material={materials["TREE GREEN"]}
            position={[0.302, 0.052, 0.071]}
            rotation={[1.796, -0.26, -1.108]}
            scale={0.887}
          />
          <mesh
            name="REED002_131"
            castShadow
            receiveShadow
            geometry={nodes.REED002_131.geometry}
            material={materials["TREE GREEN"]}
            position={[0.308, 0.053, 0.056]}
            rotation={[1.694, -0.197, 0.544]}
            scale={0.598}
          />
          <mesh
            name="REED003_131"
            castShadow
            receiveShadow
            geometry={nodes.REED003_131.geometry}
            material={materials["TREE GREEN"]}
            position={[0.287, 0.053, 0.071]}
            rotation={[1.463, -0.18, 0.753]}
            scale={0.604}
          />
          <mesh
            name="REED001_132"
            castShadow
            receiveShadow
            geometry={nodes.REED001_132.geometry}
            material={materials["TREE GREEN"]}
            position={[0.257, 0.055, 0.078]}
            rotation={[1.553, 0.2, -1.43]}
            scale={0.621}
          />
          <mesh
            name="REED002_132"
            castShadow
            receiveShadow
            geometry={nodes.REED002_132.geometry}
            material={materials["TREE GREEN"]}
            position={[0.262, 0.054, 0.063]}
            rotation={[1.332, -0.077, -2.147]}
            scale={0.674}
          />
          <mesh
            name="REED003_132"
            castShadow
            receiveShadow
            geometry={nodes.REED003_132.geometry}
            material={materials["TREE GREEN"]}
            position={[0.287, 0.053, 0.071]}
            rotation={[1.757, 0.028, -1.54]}
            scale={0.533}
          />
          <mesh
            name="REED001_133"
            castShadow
            receiveShadow
            geometry={nodes.REED001_133.geometry}
            material={materials["TREE GREEN"]}
            position={[0.257, 0.055, 0.078]}
            rotation={[1.548, -0.03, 2.822]}
            scale={0.507}
          />
          <mesh
            name="REED002_133"
            castShadow
            receiveShadow
            geometry={nodes.REED002_133.geometry}
            material={materials["TREE GREEN"]}
            position={[0.217, 0.053, 0.072]}
            rotation={[1.92, 0.092, 1.992]}
            scale={0.525}
          />
          <mesh
            name="REED003_133"
            castShadow
            receiveShadow
            geometry={nodes.REED003_133.geometry}
            material={materials["TREE GREEN"]}
            position={[0.242, 0.054, 0.078]}
            rotation={[1.674, 0.126, -0.963]}
            scale={0.356}
          />
          <mesh
            name="REED001_134"
            castShadow
            receiveShadow
            geometry={nodes.REED001_134.geometry}
            material={materials["TREE GREEN"]}
            position={[0.214, 0.05, 0.087]}
            rotation={[1.467, -0.13, -0.502]}
            scale={0.573}
          />
          <mesh
            name="REED002_134"
            castShadow
            receiveShadow
            geometry={nodes.REED002_134.geometry}
            material={materials["TREE GREEN"]}
            position={[0.217, 0.053, 0.072]}
            rotation={[1.768, 0.097, -1.869]}
            scale={0.777}
          />
          <mesh
            name="REED003_134"
            castShadow
            receiveShadow
            geometry={nodes.REED003_134.geometry}
            material={materials["TREE GREEN"]}
            position={[0.199, 0.05, 0.088]}
            rotation={[1.674, 0.022, -1.719]}
            scale={0.719}
          />
          <mesh
            name="REED001_135"
            castShadow
            receiveShadow
            geometry={nodes.REED001_135.geometry}
            material={materials["TREE GREEN"]}
            position={[0.173, 0.049, 0.099]}
            rotation={[1.588, 0.161, 1.891]}
            scale={0.602}
          />
          <mesh
            name="REED002_135"
            castShadow
            receiveShadow
            geometry={nodes.REED002_135.geometry}
            material={materials["TREE GREEN"]}
            position={[0.174, 0.052, 0.084]}
            rotation={[1.316, -0.005, 0.996]}
            scale={0.496}
          />
          <mesh
            name="REED003_135"
            castShadow
            receiveShadow
            geometry={nodes.REED003_135.geometry}
            material={materials["TREE GREEN"]}
            position={[0.218, 0.05, 0.108]}
            rotation={[1.707, 0.234, 0.365]}
            scale={0.668}
          />
          <mesh
            name="REED001_136"
            castShadow
            receiveShadow
            geometry={nodes.REED001_136.geometry}
            material={materials["TREE GREEN"]}
            position={[0.193, 0.047, 0.117]}
            rotation={[1.536, -0.14, -0.629]}
            scale={0.907}
          />
          <mesh
            name="REED002_136"
            castShadow
            receiveShadow
            geometry={nodes.REED002_136.geometry}
            material={materials["TREE GREEN"]}
            position={[0.213, 0.049, 0.121]}
            rotation={[1.791, 0.14, 2.788]}
            scale={0.935}
          />
          <mesh
            name="REED003_136"
            castShadow
            receiveShadow
            geometry={nodes.REED003_136.geometry}
            material={materials["TREE GREEN"]}
            position={[0.25, 0.05, 0.141]}
            rotation={[1.525, -0.149, 0.408]}
            scale={0.649}
          />
          <mesh
            name="REED001_137"
            castShadow
            receiveShadow
            geometry={nodes.REED001_137.geometry}
            material={materials["TREE GREEN"]}
            position={[0.262, 0.05, 0.14]}
            rotation={[1.733, 0.15, 1.396]}
            scale={0.717}
          />
          <mesh
            name="REED002_137"
            castShadow
            receiveShadow
            geometry={nodes.REED002_137.geometry}
            material={materials["TREE GREEN"]}
            position={[0.335, 0.05, 0.098]}
            rotation={[1.616, 0.014, -1.313]}
            scale={0.688}
          />
          <mesh
            name="REED003_137"
            castShadow
            receiveShadow
            geometry={nodes.REED003_137.geometry}
            material={materials["TREE GREEN"]}
            position={[0.345, 0.05, 0.086]}
            rotation={[1.335, -0.062, -2.862]}
            scale={0.687}
          />
          <mesh
            name="REED001_138"
            castShadow
            receiveShadow
            geometry={nodes.REED001_138.geometry}
            material={materials["TREE GREEN"]}
            position={[0.317, 0.049, 0.092]}
            rotation={[1.459, 0.12, 0.769]}
            scale={0.88}
          />
          <mesh
            name="REED002_138"
            castShadow
            receiveShadow
            geometry={nodes.REED002_138.geometry}
            material={materials["TREE GREEN"]}
            position={[0.322, 0.051, 0.078]}
            rotation={[1.594, -0.195, -0.25]}
            scale={0.483}
          />
          <mesh
            name="REED003_138"
            castShadow
            receiveShadow
            geometry={nodes.REED003_138.geometry}
            material={materials["TREE GREEN"]}
            position={[0.345, 0.05, 0.086]}
            rotation={[1.308, -0.127, 1.939]}
            scale={0.378}
          />
          <mesh
            name="REED001_139"
            castShadow
            receiveShadow
            geometry={nodes.REED001_139.geometry}
            material={materials["TREE GREEN"]}
            position={[0.317, 0.049, 0.092]}
            rotation={[1.288, 0.043, -2.851]}
            scale={0.624}
          />
          <mesh
            name="REED002_139"
            castShadow
            receiveShadow
            geometry={nodes.REED002_139.geometry}
            material={materials["TREE GREEN"]}
            position={[0.322, 0.051, 0.078]}
            rotation={[1.752, -0.03, 0.45]}
            scale={0.928}
          />
          <mesh
            name="REED003_139"
            castShadow
            receiveShadow
            geometry={nodes.REED003_139.geometry}
            material={materials["TREE GREEN"]}
            position={[0.144, 0.052, 0.134]}
            rotation={[1.422, -0.013, 0.636]}
            scale={0.68}
          />
          <mesh
            name="REED001_140"
            castShadow
            receiveShadow
            geometry={nodes.REED001_140.geometry}
            material={materials["TREE GREEN"]}
            position={[0.123, 0.052, 0.147]}
            rotation={[1.815, 0.097, 0.443]}
            scale={0.538}
          />
          <mesh
            name="REED002_140"
            castShadow
            receiveShadow
            geometry={nodes.REED002_140.geometry}
            material={materials["TREE GREEN"]}
            position={[0.121, 0.053, 0.132]}
            rotation={[1.594, -0.049, -1.115]}
            scale={0.588}
          />
          <mesh
            name="REED003_140"
            castShadow
            receiveShadow
            geometry={nodes.REED003_140.geometry}
            material={materials["TREE GREEN"]}
            position={[0.132, 0.052, 0.165]}
            rotation={[1.301, -0.042, 2.612]}
            scale={0.378}
          />
          <mesh
            name="REED001_141"
            castShadow
            receiveShadow
            geometry={nodes.REED001_141.geometry}
            material={materials["TREE GREEN"]}
            position={[0.113, 0.049, 0.178]}
            rotation={[1.612, 0.155, 0.264]}
            scale={0.476}
          />
          <mesh
            name="REED002_141"
            castShadow
            receiveShadow
            geometry={nodes.REED002_141.geometry}
            material={materials["TREE GREEN"]}
            position={[0.135, 0.054, 0.099]}
            rotation={[1.57, 0.209, -0.148]}
            scale={0.928}
          />
          <mesh
            name="REED003_141"
            castShadow
            receiveShadow
            geometry={nodes.REED003_141.geometry}
            material={materials["TREE GREEN"]}
            position={[0.159, 0.05, 0.101]}
            rotation={[1.582, -0.171, -0.658]}
            scale={0.642}
          />
          <mesh
            name="REED001_142"
            castShadow
            receiveShadow
            geometry={nodes.REED001_142.geometry}
            material={materials["TREE GREEN"]}
            position={[0.101, 0.054, 0.131]}
            rotation={[1.768, -0.225, 2.339]}
            scale={0.649}
          />
          <mesh
            name="REED002_142"
            castShadow
            receiveShadow
            geometry={nodes.REED002_142.geometry}
            material={materials["TREE GREEN"]}
            position={[0.06, 0.052, 0.171]}
            rotation={[1.708, -0.013, -0.454]}
            scale={0.59}
          />
          <mesh
            name="REED003_142"
            castShadow
            receiveShadow
            geometry={nodes.REED003_142.geometry}
            material={materials["TREE GREEN"]}
            position={[0.199, 0.049, 0.136]}
            rotation={[1.839, 0.08, 2.139]}
            scale={0.697}
          />
          <mesh
            name="REED001_143"
            castShadow
            receiveShadow
            geometry={nodes.REED001_143.geometry}
            material={materials["TREE GREEN"]}
            position={[0.157, 0.051, 0.131]}
            rotation={[1.328, -0.128, 0.388]}
            scale={0.747}
          />
          <mesh
            name="REED002_143"
            castShadow
            receiveShadow
            geometry={nodes.REED002_143.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.01, 0.05, 0.242]}
            rotation={[1.603, -0.212, -1.878]}
            scale={0.852}
          />
          <mesh
            name="REED003_143"
            castShadow
            receiveShadow
            geometry={nodes.REED003_143.geometry}
            material={materials["TREE GREEN"]}
            position={[0.031, 0.052, 0.179]}
            rotation={[1.517, 0.14, 1.988]}
            scale={0.678}
          />
          <mesh
            name="REED001_144"
            castShadow
            receiveShadow
            geometry={nodes.REED001_144.geometry}
            material={materials["TREE GREEN"]}
            position={[0.062, 0.052, 0.215]}
            rotation={[1.802, 0.13, -2.673]}
            scale={0.742}
          />
          <mesh
            name="REED002_144"
            castShadow
            receiveShadow
            geometry={nodes.REED002_144.geometry}
            material={materials["TREE GREEN"]}
            position={[0.057, 0.052, 0.203]}
            rotation={[1.613, -0.028, -1.447]}
            scale={0.885}
          />
        </mesh>
        <group
          name="DUCK_1"
          position={[-0.384, -0.014, -1.034]}
          rotation={[0, 1.447, 0]}
        >
          <mesh
            name="Cube017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_1.geometry}
            material={materials["DUCK GREEN"]}
          />
          <mesh
            name="Cube017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_2.geometry}
            material={materials["DUCK YELLOW"]}
          />
        </group>
        <group name="DUCK_1_PATH" position={[-0.111, -0.024, -1.073]} />
        <group
          name="DUCK_2"
          position={[0.375, -0.01, -1.528]}
          rotation={[Math.PI, -0.437, Math.PI]}
        >
          <mesh
            name="Cube018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_1.geometry}
            material={materials["DUCK GREEN"]}
          />
          <mesh
            name="Cube018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_2.geometry}
            material={materials["DUCK YELLOW"]}
          />
        </group>
        <group name="DUCK_2_PATH" position={[0.509, -0.024, -1.321]} />
        <mesh
          name="TreeTrunk011"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk011.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[0.591, 0.037, -1.917]}
          rotation={[Math.PI, -0.946, Math.PI]}
        >
          <mesh
            name="Object_186073"
            castShadow
            receiveShadow
            geometry={nodes.Object_186073.geometry}
            material={materials["TREE GREEN"]}
            position={[0.003, 0.162, -0.009]}
            rotation={[0.163, -0.03, 0.608]}
          />
        </mesh>
        <mesh
          name="TreeTrunk009"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk009.geometry}
          material={materials["WOOD BROWN"]}
          position={[0.744, 0.03, -1.92]}
          rotation={[Math.PI, -0.626, Math.PI]}
        >
          <mesh
            name="Object_186003"
            castShadow
            receiveShadow
            geometry={nodes.Object_186003.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.012, 0.185, 0.001]}
            rotation={[-0.141, -0.45, 0.406]}
          />
        </mesh>
        <mesh
          name="TreeTrunk016"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk016.geometry}
          material={materials["WOOD BROWN"]}
          position={[-0.098, 0.03, -1.898]}
          rotation={[Math.PI, -0.626, Math.PI]}
        >
          <mesh
            name="Object_186012"
            castShadow
            receiveShadow
            geometry={nodes.Object_186012.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.016, 0.252, 0.003]}
            rotation={[0, 0.865, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk010"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk010.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[0.108, 0.03, -1.961]}
          rotation={[-Math.PI, 0.185, -Math.PI]}
        >
          <mesh
            name="Object_186005"
            castShadow
            receiveShadow
            geometry={nodes.Object_186005.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.004, -0.111, 0.008]}
            rotation={[0, -1.128, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk012"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk012.geometry}
          material={materials["WOOD BROWN"]}
          position={[-0.512, 0.03, -1.807]}
          rotation={[0, -1.532, 0]}
        >
          <mesh
            name="Object_186004"
            castShadow
            receiveShadow
            geometry={nodes.Object_186004.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.012, 0.189, 0.002]}
            rotation={[0, 0.865, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk014"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk014.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-0.368, 0.037, -1.975]}
          rotation={[Math.PI, -0.798, Math.PI]}
        >
          <mesh
            name="Object_186075"
            castShadow
            receiveShadow
            geometry={nodes.Object_186075.geometry}
            material={materials["TREE GREEN"]}
            position={[0.006, 0.252, -0.015]}
          />
        </mesh>
        <mesh
          name="TreeTrunk013"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk013.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-0.589, 0.03, -1.979]}
          rotation={[Math.PI, -0.798, Math.PI]}
        >
          <mesh
            name="Object_186074"
            castShadow
            receiveShadow
            geometry={nodes.Object_186074.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.004, -0.111, 0.008]}
            rotation={[0, -1.128, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk015"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk015.geometry}
          material={materials["WOOD BROWN"]}
          position={[0.688, 0.03, -0.785]}
          rotation={[0, -0.878, 0]}
        >
          <mesh
            name="Object_186013"
            castShadow
            receiveShadow
            geometry={nodes.Object_186013.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.001, 0.196, -0.005]}
            rotation={[-0.538, -0.985, -0.144]}
          />
        </mesh>
        <mesh
          name="TreeTrunk019"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk019.geometry}
          material={materials["WOOD BROWN"]}
          position={[0.474, 0.03, -0.724]}
          rotation={[0, 0.913, 0]}
        >
          <mesh
            name="Object_186006"
            castShadow
            receiveShadow
            geometry={nodes.Object_186006.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.012, 0.189, 0.002]}
            rotation={[0, -0.232, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk017"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk017.geometry}
          material={materials["WOOD BROWN"]}
          position={[0.851, 0.045, -0.825]}
          rotation={[0, -0.329, 0]}
        >
          <mesh
            name="Object_186076"
            castShadow
            receiveShadow
            geometry={nodes.Object_186076.geometry}
            material={materials["TREE GREEN"]}
            position={[0.006, 0.235, -0.003]}
            rotation={[0.483, 0.31, 0.402]}
          />
        </mesh>
        <mesh
          name="TreeTrunk020"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk020.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[0.578, 0.045, -0.614]}
          rotation={[0, 0.102, 0]}
        >
          <mesh
            name="Object_186007"
            castShadow
            receiveShadow
            geometry={nodes.Object_186007.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.003, 0.288, -0.003]}
            rotation={[2.907, -0.816, -2.945]}
          />
        </mesh>
        <mesh
          name="TreeTrunk018"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk018.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[0.29, 0.037, -0.652]}
          rotation={[0, 0.102, 0]}
        >
          <mesh
            name="Object_186077"
            castShadow
            receiveShadow
            geometry={nodes.Object_186077.geometry}
            material={materials["TREE GREEN"]}
            position={[0.006, 0.252, -0.015]}
            rotation={[0, -1.097, 0]}
          />
        </mesh>
        <group
          name="BUS_STOP"
          position={[1.214, 0.003, -1.264]}
          rotation={[0, 0.198, 0]}
        >
          <mesh
            name="Cube020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials["VITALITY LIGHT GREY"]}
          />
          <mesh
            name="Cube020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_2.geometry}
            material={materials["VITALITY DARK GREY"]}
          />
        </group>
        <mesh
          name="Object_186021"
          castShadow
          receiveShadow
          geometry={nodes.Object_186021.geometry}
          material={materials["TREE GREEN"]}
          position={[-0.443, 0.011, -1.843]}
          rotation={[0.402, 0.323, 0.936]}
        />
        <mesh
          name="Object_186022"
          castShadow
          receiveShadow
          geometry={nodes.Object_186022.geometry}
          material={materials["TREE GREEN"]}
          position={[-0.415, 0.011, -1.904]}
          rotation={[-0.624, -0.02, -2.766]}
        />
        <mesh
          name="Object_186023"
          castShadow
          receiveShadow
          geometry={nodes.Object_186023.geometry}
          material={materials["TREE GREEN"]}
          position={[-0.051, 0.008, -1.97]}
          rotation={[-0.506, 0.698, -1.729]}
        />
        <mesh
          name="Object_186024"
          castShadow
          receiveShadow
          geometry={nodes.Object_186024.geometry}
          material={materials["TREE GREEN"]}
          position={[-0.133, 0.008, -1.971]}
          rotation={[1.043, 0.828, -0.512]}
        />
        <mesh
          name="Object_186025"
          castShadow
          receiveShadow
          geometry={nodes.Object_186025.geometry}
          material={materials["TREE GREEN"]}
          position={[0.027, -0.001, -1.954]}
          rotation={[-0.01, 0.328, -3.091]}
        />
        <mesh
          name="Object_186026"
          castShadow
          receiveShadow
          geometry={nodes.Object_186026.geometry}
          material={materials["TREE GREEN"]}
          position={[0.75, 0.016, -0.778]}
          rotation={[-1.448, 1.218, -0.382]}
        />
        <mesh
          name="Object_186027"
          castShadow
          receiveShadow
          geometry={nodes.Object_186027.geometry}
          material={materials["TREE GREEN"]}
          position={[0.682, 0.001, -0.706]}
          rotation={[2.298, 0.811, -1.804]}
        />
        <mesh
          name="Object_186028"
          castShadow
          receiveShadow
          geometry={nodes.Object_186028.geometry}
          material={materials["TREE GREEN"]}
          position={[0.376, 0.029, -0.597]}
          rotation={[-1.959, -0.36, -0.093]}
        />
        <mesh
          name="Object_186029"
          castShadow
          receiveShadow
          geometry={nodes.Object_186029.geometry}
          material={materials["TREE GREEN"]}
          position={[0.279, 0.015, -0.61]}
          rotation={[3.11, -0.301, 1.861]}
        />
        <mesh
          name="Object_186030"
          castShadow
          receiveShadow
          geometry={nodes.Object_186030.geometry}
          material={materials["TREE GREEN"]}
          position={[0.193, 0.012, -0.593]}
          rotation={[2.458, -0.467, -0.195]}
        />
        <mesh
          name="Object_186031"
          castShadow
          receiveShadow
          geometry={nodes.Object_186031.geometry}
          material={materials["TREE GREEN"]}
          position={[0.257, 0.02, -0.531]}
          rotation={[1.021, -0.102, -2.317]}
        />
        <mesh
          name="Object_186103"
          castShadow
          receiveShadow
          geometry={nodes.Object_186103.geometry}
          material={materials["TREE GREEN"]}
          position={[-0.743, 0.008, -1.501]}
          rotation={[-2.533, 0.863, 0.583]}
          scale={[0.773, 0.87, 0.882]}
        />
        <mesh
          name="Object_186104"
          castShadow
          receiveShadow
          geometry={nodes.Object_186104.geometry}
          material={materials["TREE GREEN"]}
          position={[-0.756, 0.008, -1.427]}
          rotation={[2.756, 0.402, -2.5]}
          scale={0.909}
        />
        <mesh
          name="Object_186105"
          castShadow
          receiveShadow
          geometry={nodes.Object_186105.geometry}
          material={materials["TREE GREEN"]}
          position={[-0.719, 0.009, -1.594]}
          rotation={[-0.011, 0.348, -3.09]}
          scale={[0.926, 0.909, 1.336]}
        />
        <mesh
          name="REED001_145"
          castShadow
          receiveShadow
          geometry={nodes.REED001_145.geometry}
          material={materials["TREE GREEN"]}
          position={[0.576, -0.025, -1.598]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="REED002_145"
          castShadow
          receiveShadow
          geometry={nodes.REED002_145.geometry}
          material={materials["TREE GREEN"]}
          position={[0.595, -0.025, -1.598]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="REED003_144"
          castShadow
          receiveShadow
          geometry={nodes.REED003_144.geometry}
          material={materials["TREE GREEN"]}
          position={[0.615, -0.027, -1.601]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.782}
        />
        <group
          name="Stadium"
          position={[-2.979, 0, -0.328]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <group name="Root">
            <group name="Bleachers" position={[-0.971, -0.731, 0.028]} />
            <group name="Bleachers001" position={[-0.971, -0.282, 0.028]} />
            <group
              name="Bleachers006"
              position={[0.974, 0.308, 0.028]}
              rotation={[0, 0, Math.PI]}
            />
            <group
              name="Bleachers007"
              position={[0.974, 0.756, 0.028]}
              rotation={[0, 0, Math.PI]}
            />
            <group name="Soccer_Field" rotation={[0, 0, Math.PI]}>
              <mesh
                name="Soccer_Field_0"
                castShadow
                receiveShadow
                geometry={nodes.Soccer_Field_0.geometry}
                material={materials.WHITE}
              />
              <mesh
                name="Soccer_Field_1"
                castShadow
                receiveShadow
                geometry={nodes.Soccer_Field_1.geometry}
                material={materials["TREE GREEN"]}
              />
            </group>
            <group
              name="Soccer_Goal"
              position={[0, 1.207, 0.062]}
              rotation={[0, 0, Math.PI]}
            >
              <mesh
                name="Soccer_Goal_0"
                castShadow
                receiveShadow
                geometry={nodes.Soccer_Goal_0.geometry}
                material={materials.WHITE}
                position={[0, 0, 0.032]}
              />
              <mesh
                name="Soccer_Goal_1"
                castShadow
                receiveShadow
                geometry={nodes.Soccer_Goal_1.geometry}
                material={nodes.Soccer_Goal_1.material}
                position={[0, 0, 0.032]}
              />
            </group>
            <group name="Soccer_Goal001" position={[0, -1.206, 0.062]}>
              <mesh
                name="Soccer_Goal001_0"
                castShadow
                receiveShadow
                geometry={nodes.Soccer_Goal001_0.geometry}
                material={materials.WHITE}
                position={[0, 0, 0.028]}
              />
              <mesh
                name="Soccer_Goal001_1"
                castShadow
                receiveShadow
                geometry={nodes.Soccer_Goal001_1.geometry}
                material={nodes.Soccer_Goal001_1.material}
                position={[0, 0, 0.028]}
              />
            </group>
          </group>
        </group>
        <mesh
          name="realisticbench"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench.geometry}
          material={materials["VITALITY GREY"]}
          position={[-2.519, -0.001, -1.105]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          name="realisticbench005"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench005.geometry}
          material={materials["VITALITY GREY"]}
          position={[-2.348, -0.001, -1.105]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          name="realisticbench006"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench006.geometry}
          material={materials["VITALITY GREY"]}
          position={[-3.69, -0.001, -1.105]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          name="realisticbench007"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench007.geometry}
          material={materials["VITALITY GREY"]}
          position={[-2.91, -0.001, 0.432]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="realisticbench008"
          castShadow
          receiveShadow
          geometry={nodes.realisticbench008.geometry}
          material={materials["VITALITY GREY"]}
          position={[-3.081, -0.001, 0.432]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="TreeTrunk004"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk004.geometry}
          material={materials["WOOD BROWN"]}
          position={[-4.368, 0.049, 0.162]}
          rotation={[0, -0.376, 0]}
        >
          <mesh
            name="Object_186010"
            castShadow
            receiveShadow
            geometry={nodes.Object_186010.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.011, 0.182, 0.002]}
            rotation={[0, 0.865, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk006"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk006.geometry}
          material={materials["WOOD BROWN"]}
          position={[-4.444, 0.049, 0.051]}
          rotation={[0, 0.95, 0]}
        >
          <mesh
            name="Object_186071"
            castShadow
            receiveShadow
            geometry={nodes.Object_186071.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.014, 0.234, 0.003]}
            rotation={[0, 0.865, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk005"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk005.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-4.406, 0.049, 0.327]}
          rotation={[-Math.PI, 0.889, -Math.PI]}
        >
          <mesh
            name="Object_186070"
            castShadow
            receiveShadow
            geometry={nodes.Object_186070.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.013, 0.314, -0.002]}
            rotation={[0.286, -0.035, 0.36]}
          />
        </mesh>
        <mesh
          name="TreeTrunk008"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk008.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-4.333, 0.049, -1.136]}
          rotation={[0, -1.504, 0]}
        >
          <mesh
            name="Object_186072"
            castShadow
            receiveShadow
            geometry={nodes.Object_186072.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.007, 0.31, -0.01]}
          />
        </mesh>
        <mesh
          name="TreeTrunk007"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk007.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-4.213, 0.085, -1.328]}
          rotation={[-Math.PI, 1.561, -Math.PI]}
        >
          <mesh
            name="Object_186045"
            castShadow
            receiveShadow
            geometry={nodes.Object_186045.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.014, 0.227, -0.016]}
            rotation={[-0.068, -0.066, 0.398]}
          />
        </mesh>
        <mesh
          name="TreeTrunk002"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk002.geometry}
          material={materials["WOOD BROWN"]}
          position={[-2.138, 0.049, 0.504]}
          rotation={[0, 0.811, 0]}
        >
          <mesh
            name="Object_186011"
            castShadow
            receiveShadow
            geometry={nodes.Object_186011.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.012, 0.189, 0.002]}
            rotation={[0, 0.865, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk003"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk003.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-2.207, 0.049, 0.68]}
        >
          <mesh
            name="Object_186069"
            castShadow
            receiveShadow
            geometry={nodes.Object_186069.geometry}
            material={materials["TREE GREEN"]}
            position={[-0.004, -0.111, 0.008]}
            rotation={[0, -1.128, 0]}
          />
        </mesh>
        <mesh
          name="TreeTrunk001"
          castShadow
          receiveShadow
          geometry={nodes.TreeTrunk001.geometry}
          material={materials["WOOD BROWN 2"]}
          position={[-2.33, 0.049, 0.549]}
        >
          <mesh
            name="Object_186009"
            castShadow
            receiveShadow
            geometry={nodes.Object_186009.geometry}
            material={materials["TREE GREEN"]}
            position={[0.006, 0.272, -0.015]}
            rotation={[0.413, -0.116, 0.517]}
          />
        </mesh>
        {/* <mesh
          name="Curve004"
          castShadow
          receiveShadow
          geometry={nodes.Curve004.geometry}
          material={materials["VITALITY BLACK"]}
          position={[-4.627, 0.495, -0.058]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        /> */}
        {/* <mesh
          name="Curve006"
          castShadow
          receiveShadow
          geometry={nodes.Curve006.geometry}
          material={materials["VITALITY BLACK"]}
          position={[-4.639, 0.495, -0.586]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        /> */}
        {/* <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["VITALITY LIGHT PINK"]}
          position={[-4.632, 0.014, -0.324]}
          rotation={[Math.PI / 2, 0, 0]}
        /> */}
        {/* <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["VITALITY PINK"]}
          position={[-4.632, 0.014, -0.324]}
          rotation={[Math.PI / 2, 0, 0]}
        /> */}
        {/* <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["VITALITY PINK"]}
          position={[-4.632, 0.014, -0.324]}
          rotation={[Math.PI / 2, 0, 0]}
        /> */}
        <group
          name="RUNNING_MAN_1001"
          position={[-0.294, 0.001, -1.703]}
          rotation={[0, 1.412, 0]}
          scale={0.074}
        >
          <skinnedMesh
            name="Exercising_Man_B001"
            geometry={nodes.Exercising_Man_B001.geometry}
            material={materials["Exercising People 04.001"]}
            skeleton={nodes.Exercising_Man_B001.skeleton}
          />
          <primitive object={nodes.spine} />
        </group>
        <group
          name="RUNNING_MAN_1_PATH001"
          position={[0.157, 0.001, -1.667]}
          scale={0.33}
        />
        <group
          name="MOUNTAIN_BIKE_1001"
          position={[-4.305, 0.002, 0.056]}
          rotation={[Math.PI, -0.005, Math.PI]}
          scale={0.082}
        >
          <group name="ArmatureBike001">
            <primitive object={nodes.BikeMain} />
          </group>
          <skinnedMesh
            name="Exercising_Woman_C002"
            geometry={nodes.Exercising_Woman_C002.geometry}
            material={materials["Exercising People 05.002"]}
            skeleton={nodes.Exercising_Woman_C002.skeleton}
          />
          <group name="Metarig_Woman001">
            <primitive object={nodes.spine_1} />
          </group>
          <skinnedMesh
            name="MountainBike002"
            geometry={nodes.MountainBike002.geometry}
            material={materials["Light Vehicles 01.001"]}
            skeleton={nodes.MountainBike002.skeleton}
          />
        </group>
        <group
          name="MOUNTAIN_BIKE_1_PATH001"
          position={[-4.323, 0.004, -0.968]}
        />
        <group
          name="JOGGING_WOMAN_1001"
          position={[-0.981, 0.013, 1.992]}
          rotation={[0, 1.57, 0]}
          scale={0.08}
        >
          <skinnedMesh
            name="Exercising_Woman_C003"
            geometry={nodes.Exercising_Woman_C003.geometry}
            material={materials["Exercising People 05.003"]}
            skeleton={nodes.Exercising_Woman_C003.skeleton}
          />
          <primitive object={nodes.spine_2} />
        </group>
        <group name="JOGGING_WOMAN_1_PATH001" position={[0.86, 0, 0.81]} />
        <group
          name="WALKING_MAN_1001"
          position={[-0.938, 0.016, 0.295]}
          rotation={[0, 1.442, 0]}
          scale={0.083}
        >
          <skinnedMesh
            name="Exercising_Man_C001"
            geometry={nodes.Exercising_Man_C001.geometry}
            material={materials["Exercising People 06.002"]}
            skeleton={nodes.Exercising_Man_C001.skeleton}
          />
          <primitive object={nodes.spine_3} />
        </group>
        <group name="WALKING_MAN_1_PATH001" position={[-0.821, 0, 0.326]} />
        <group name="SMALL_ROAD_POND" position={[-0.769, 0, -2.186]} />
        <mesh
          name="ROAD1"
          castShadow
          receiveShadow
          geometry={nodes.ROAD1.geometry}
          material={materials.ROAD1}
          position={[3.895, 0.003, -2.074]}
        />
        <mesh
          name="ROAD2"
          castShadow
          receiveShadow
          geometry={nodes.ROAD2.geometry}
          material={materials.ROAD1}
          position={[0.607, 0.003, -2.184]}
        />
        <group name="SMALL_ROAD_HOUSES" position={[1.649, 0, -1.124]} />
        <mesh
          name="ROAD3"
          castShadow
          receiveShadow
          geometry={nodes.ROAD3.geometry}
          material={materials.ROAD1}
          position={[4.539, 0.003, -1.122]}
        />
        <mesh
          name="Roundabout1001"
          castShadow
          receiveShadow
          geometry={nodes.Roundabout1001.geometry}
          material={materials.ROAD1}
          position={[1.333, 0.003, -0.385]}
          scale={[1.053, 1, 1.053]}
        />
        <mesh
          name="Roundabout1002"
          castShadow
          receiveShadow
          geometry={nodes.Roundabout1002.geometry}
          material={materials.ROAD1}
          position={[-0.305, 0.003, -0.134]}
          scale={[1.053, 1, 1.053]}
        />
        <group
          name="VAN_PATH"
          position={[-0.895, 0.006, -2.273]}
          rotation={[Math.PI, -1.279, Math.PI]}
        />
        {/* <group
          name="CAR_PATH_1"
          position={[-3.731, 0.002, -2.074]}
          scale={0.886}
        /> */}
        {/* <group name="CAR_PATH_2" position={[1.62, 0, -1.124]} /> */}
        {/* <group
          name="CAR_1_CONTROL"
          position={[1.719, 0.008, -0.06]}
          rotation={[0, 1.222, 0]}
        >
          <mesh
            name="Object_257001"
            castShadow
            receiveShadow
            geometry={nodes.Object_257001.geometry}
            material={materials["VITALITY BLUE"]}
            position={[0, 0.051, 0]}
            rotation={[0, -1.57, -1.571]}
          >
            <mesh
              name="Object_256001"
              castShadow
              receiveShadow
              geometry={nodes.Object_256001.geometry}
              material={materials["VITALITY ICE BLUE"]}
              scale={0.845}
            />
            <mesh
              name="Object_258001"
              castShadow
              receiveShadow
              geometry={nodes.Object_258001.geometry}
              material={materials.StreetLight}
              scale={0.845}
            />
            <mesh
              name="Object_259001"
              castShadow
              receiveShadow
              geometry={nodes.Object_259001.geometry}
              material={materials["VITALITY DARK GREY"]}
              scale={0.845}
            />
            <mesh
              name="Object_260001"
              castShadow
              receiveShadow
              geometry={nodes.Object_260001.geometry}
              material={materials["VITALITY BLACK"]}
              scale={0.845}
            />
            <mesh
              name="Object_261001"
              castShadow
              receiveShadow
              geometry={nodes.Object_261001.geometry}
              material={materials["VITALITY GREY"]}
              scale={0.845}
            />
          </mesh>
        </group> */}
        {/* <group
          name="CAR_1_CONTROL_prebake"
          position={[1.697, 0.008, -0.068]}
          rotation={[0, 1.215, 0]}
        /> */}
        {/* <group
          name="CAR_2_CONTROL"
          position={[-4.97, 0.006, -0.273]}
          rotation={[-3.132, 0.061, -3.115]}
        >
          <mesh
            name="Object_257002"
            castShadow
            receiveShadow
            geometry={nodes.Object_257002.geometry}
            material={materials["VITALITY VIOLET"]}
            position={[0, 0.053, 0]}
          >
            <mesh
              name="Object_256002"
              castShadow
              receiveShadow
              geometry={nodes.Object_256002.geometry}
              material={materials["VITALITY ICE BLUE"]}
              rotation={[1.571, -Math.PI / 2, 0]}
              scale={0.845}
            />
            <mesh
              name="Object_258002"
              castShadow
              receiveShadow
              geometry={nodes.Object_258002.geometry}
              material={materials.StreetLight}
              rotation={[1.571, -Math.PI / 2, 0]}
              scale={0.845}
            />
            <mesh
              name="Object_259002"
              castShadow
              receiveShadow
              geometry={nodes.Object_259002.geometry}
              material={materials["VITALITY DARK GREY"]}
              rotation={[1.571, -Math.PI / 2, 0]}
              scale={0.845}
            />
            <mesh
              name="Object_260002"
              castShadow
              receiveShadow
              geometry={nodes.Object_260002.geometry}
              material={materials["VITALITY BLACK"]}
              rotation={[1.571, -Math.PI / 2, 0]}
              scale={0.845}
            />
            <mesh
              name="Object_261002"
              castShadow
              receiveShadow
              geometry={nodes.Object_261002.geometry}
              material={materials["VITALITY GREY"]}
              rotation={[1.571, -Math.PI / 2, 0]}
              scale={0.845}
            />
          </mesh>
        </group> */}
        {/* <group
          name="CAR_2_CONTROL_prebake"
          position={[-4.971, 0.006, -0.255]}
          rotation={[-3.134, 0.047, -3.116]}
        /> */}
        {/* <group
          name="CAR_3_CONTROL_prebake"
          position={[-0.447, 0.004, 0.709]}
          rotation={[0, 0.119, -0.01]}
        /> */}
        {/* <group
          name="CAR_3_CONTROL"
          position={[-0.445, 0.004, 0.727]}
          rotation={[0, 0.122, -0.01]}
        >
          <mesh
            name="Object_257003"
            castShadow
            receiveShadow
            geometry={nodes.Object_257003.geometry}
            material={materials["VITALITY DARK GREEN"]}
            position={[-0.001, 0.054, 0]}
            rotation={[0, 0.002, 0.01]}
          >
            <mesh
              name="Object_256003"
              castShadow
              receiveShadow
              geometry={nodes.Object_256003.geometry}
              material={materials["VITALITY ICE BLUE"]}
              rotation={[1.571, -Math.PI / 2, 0]}
              scale={0.845}
            />
            <mesh
              name="Object_258003"
              castShadow
              receiveShadow
              geometry={nodes.Object_258003.geometry}
              material={materials.StreetLight}
              rotation={[1.571, -Math.PI / 2, 0]}
              scale={0.845}
            />
            <mesh
              name="Object_259003"
              castShadow
              receiveShadow
              geometry={nodes.Object_259003.geometry}
              material={materials["VITALITY DARK GREY"]}
              rotation={[1.571, -Math.PI / 2, 0]}
              scale={0.845}
            />
            <mesh
              name="Object_260003"
              castShadow
              receiveShadow
              geometry={nodes.Object_260003.geometry}
              material={materials["VITALITY BLACK"]}
              rotation={[1.571, -Math.PI / 2, 0]}
              scale={0.845}
            />
            <mesh
              name="Object_261003"
              castShadow
              receiveShadow
              geometry={nodes.Object_261003.geometry}
              material={materials["VITALITY GREY"]}
              rotation={[1.571, -Math.PI / 2, 0]}
              scale={0.845}
            />
          </mesh>
        </group> */}
        {/* <group
          name="VAN_CONTROL"
          position={[-0.893, 0.012, -2.279]}
          rotation={[0, -0.02, 0]}
        >
          <mesh
            name="group_0002"
            castShadow
            receiveShadow
            geometry={nodes.group_0002.geometry}
            material={materials["Amazon Blue Tick"]}
            position={[-0.089, 0.059, 1.228]}
            rotation={[1.508, -0.27, 1.352]}
            scale={0}
          >
            <mesh
              name="group_0001"
              castShadow
              receiveShadow
              geometry={nodes.group_0001.geometry}
              material={materials["Amazon Blue Tick"]}
              position={[0, -0.001, -0.001]}
            />
            <mesh
              name="group_0003"
              castShadow
              receiveShadow
              geometry={nodes.group_0003.geometry}
              material={materials["Amazon White"]}
              position={[0, -0.001, -0.001]}
            />
            <mesh
              name="group_0004"
              castShadow
              receiveShadow
              geometry={nodes.group_0004.geometry}
              material={materials["Amazon White"]}
              position={[0, -0.001, -0.001]}
            />
            <mesh
              name="group_0005"
              castShadow
              receiveShadow
              geometry={nodes.group_0005.geometry}
              material={materials["Amazon White"]}
              position={[0, -0.001, -0.001]}
            />
            <mesh
              name="group_0006"
              castShadow
              receiveShadow
              geometry={nodes.group_0006.geometry}
              material={materials["Amazon White"]}
              position={[0, -0.001, -0.001]}
            />
            <mesh
              name="group_0007"
              castShadow
              receiveShadow
              geometry={nodes.group_0007.geometry}
              material={materials["Amazon White"]}
              position={[0, -0.001, -0.001]}
            />
            <mesh
              name="group_0016"
              castShadow
              receiveShadow
              geometry={nodes.group_0016.geometry}
              material={materials["Amazon White"]}
              position={[0, -0.001, -0.001]}
            />
          </mesh>
          <group
            name="Van_Plane"
            position={[0, -0.007, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.077}
          >
            <mesh
              name="Van_Plane_1"
              castShadow
              receiveShadow
              geometry={nodes.Van_Plane_1.geometry}
              material={materials["Amazon Van"]}
            />
            <mesh
              name="Van_Plane_2"
              castShadow
              receiveShadow
              geometry={nodes.Van_Plane_2.geometry}
              material={materials["VITALITY ICE BLUE"]}
            />
            <mesh
              name="Van_Plane_3"
              castShadow
              receiveShadow
              geometry={nodes.Van_Plane_3.geometry}
              material={materials.StreetLight}
            />
            <mesh
              name="Van_Plane_4"
              castShadow
              receiveShadow
              geometry={nodes.Van_Plane_4.geometry}
              material={materials["VITALITY BLACK"]}
            />
            <mesh
              name="Van_Plane_5"
              castShadow
              receiveShadow
              geometry={nodes.Van_Plane_5.geometry}
              material={materials["VITALITY BLACK"]}
            />
            <mesh
              name="Van_Plane_6"
              castShadow
              receiveShadow
              geometry={nodes.Van_Plane_6.geometry}
              material={materials["VITALITY DARK GREY"]}
            />
            <mesh
              name="group_0009"
              castShadow
              receiveShadow
              geometry={nodes.group_0009.geometry}
              material={materials["Amazon Blue Tick"]}
              position={[0.207, 16.915, -0.761]}
              rotation={[0.063, 0.27, -1.79]}
              scale={0.006}
            >
              <mesh
                name="group_0008"
                castShadow
                receiveShadow
                geometry={nodes.group_0008.geometry}
                material={materials["Amazon Blue Tick"]}
              />
              <mesh
                name="group_0010"
                castShadow
                receiveShadow
                geometry={nodes.group_0010.geometry}
                material={materials["Amazon White"]}
              />
              <mesh
                name="group_0011"
                castShadow
                receiveShadow
                geometry={nodes.group_0011.geometry}
                material={materials["Amazon White"]}
              />
              <mesh
                name="group_0012"
                castShadow
                receiveShadow
                geometry={nodes.group_0012.geometry}
                material={materials["Amazon White"]}
              />
              <mesh
                name="group_0013"
                castShadow
                receiveShadow
                geometry={nodes.group_0013.geometry}
                material={materials["Amazon White"]}
              />
              <mesh
                name="group_0014"
                castShadow
                receiveShadow
                geometry={nodes.group_0014.geometry}
                material={materials["Amazon White"]}
              />
              <mesh
                name="group_0015"
                castShadow
                receiveShadow
                geometry={nodes.group_0015.geometry}
                material={materials["Amazon White"]}
              />
            </mesh>
          </group>
        </group> */}
        {/* <group
          name="VAN_CONTROL_prebake"
          position={[-0.893, 0.012, -2.297]}
          rotation={[0, -0.109, 0]}
        /> */}
        <mesh
          name="Streetlight1"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-0.897, 0.047, -2.51]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1001"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1001.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-0.082, 0, -2.462]}
          rotation={[0, -0.15, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1002"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1002.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[0.679, 0.005, -2.346]}
          rotation={[0, -0.298, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1003"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1003.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[1.274, 0.005, -2.001]}
          rotation={[0, -0.773, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1004"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1004.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[1.613, 0.005, -1.259]}
          rotation={[0, -1.487, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1005"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1005.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[1.626, 0, -0.26]}
          rotation={[Math.PI, -1.225, Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1006"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1006.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[1.136, 0, 0.133]}
          rotation={[Math.PI, -0.648, Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1007"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1007.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[0.217, 0, 0.105]}
          rotation={[-Math.PI, 0.127, -Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1008"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1008.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-0.294, 0, 0.384]}
          rotation={[Math.PI, -1.546, Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1009"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1009.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-0.26, 0, 1.141]}
          rotation={[0, -1.343, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1010"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1010.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-0.247, 0, 1.98]}
          rotation={[Math.PI, -1.357, Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1011"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1011.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-0.782, 0, 2.688]}
          rotation={[Math.PI, -0.448, Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1012"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1012.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-1.626, 0.005, 2.84]}
          rotation={[-Math.PI, 0.024, -Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1013"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1013.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-2.532, 0.005, 2.763]}
          rotation={[-Math.PI, 0.216, -Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1014"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1014.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-3.365, 0, 2.588]}
          rotation={[-Math.PI, 0.364, -Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1015"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1015.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-1.881, 0.08, -2.532]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1016"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1016.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-2.699, 0.108, -2.589]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1017"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1017.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-3.433, 0.1, -2.555]}
          rotation={[0, 0.191, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1018"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1018.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-1.048, 0.001, -1.884]}
          rotation={[0, 1.57, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1019"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1019.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-1.104, 0, -1.175]}
          rotation={[0, 1.57, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1020"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1020.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-0.902, 0.005, -0.42]}
          rotation={[-Math.PI, 1.064, -Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1021"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1021.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-0.06, 0, -0.379]}
          rotation={[0, -0.894, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1022"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1022.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[1.939, 0, 0.204]}
          rotation={[-Math.PI, 0.459, -Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1023"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1023.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[2.109, 0, 0.749]}
          rotation={[0, 1.183, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1024"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1024.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[1.998, 0, 1.548]}
          rotation={[0, 1.545, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1025"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1025.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[1.519, 0, 2.191]}
          rotation={[0, 0.217, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1026"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1026.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[0.607, 0, 2.207]}
          rotation={[0, -0.16, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1027"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1027.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-3.876, 0, 2.174]}
          rotation={[-Math.PI, 0.983, -Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1028"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1028.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-4.136, 0, 1.65]}
          rotation={[-Math.PI, 1.035, -Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1029"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1029.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-4.441, 0, 1.1]}
          rotation={[-Math.PI, 1.035, -Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1030"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1030.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-4.828, 0, 0.543]}
          rotation={[-Math.PI, 0.959, -Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1031"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1031.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-5.109, 0, -0.062]}
          rotation={[-Math.PI, 1.412, -Math.PI]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1032"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1032.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-4.959, 0.055, -0.859]}
          rotation={[0, 1.269, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1033"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1033.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-4.729, 0.055, -1.552]}
          rotation={[0, 1.082, 0]}
          scale={0.097}
        />
        <mesh
          name="Streetlight1034"
          castShadow
          receiveShadow
          geometry={nodes.Streetlight1034.geometry}
          material={materials["VITALITY DARK GREY"]}
          position={[-4.219, 0.055, -2.089]}
          rotation={[0, 0.696, 0]}
          scale={0.097}
        />
        <mesh
          name="HILLS2"
          // castShadow
          receiveShadow
          geometry={nodes.HILLS2.geometry}
          material={materials["OFF WHITE"]}
          position={[-4.981, 0.079, -5.032]}
        />
        <mesh
          name="GREY_TREE_1"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.355, 0.442, -3.178]}
          rotation={[0.236, 1.072, -0.246]}
        >
          <mesh
            name="Object_186052"
            castShadow
            receiveShadow
            geometry={nodes.Object_186052.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.003, 0.217, 0.012]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1001"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1001.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.278, 0.375, -3.107]}
          rotation={[-3.102, -0.172, -3.023]}
        >
          <mesh
            name="Object_186053"
            castShadow
            receiveShadow
            geometry={nodes.Object_186053.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.163, 0.009]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1002"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1002.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.403, 0.455, -3.007]}
          rotation={[-0.892, -1.424, -0.916]}
        >
          <mesh
            name="Object_186054"
            castShadow
            receiveShadow
            geometry={nodes.Object_186054.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.003, 0.19, 0.011]}
            rotation={[3.135, -0.607, 0.248]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1004"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1004.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-4.369, 0.574, -5.098]}
          rotation={[1.742, -1.552, 1.713]}
        >
          <mesh
            name="Object_186056"
            castShadow
            receiveShadow
            geometry={nodes.Object_186056.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.172, 0.01]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1005"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1005.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-4.22, 0.581, -5.08]}
          rotation={[2.965, 1.402, -2.951]}
        >
          <mesh
            name="Object_186057"
            castShadow
            receiveShadow
            geometry={nodes.Object_186057.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.264, 0.015]}
            rotation={[-3.117, -0.599, 0.254]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1003"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1003.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-6.007, 0.279, -1.107]}
          rotation={[0.067, 1.296, -0.092]}
          scale={1.187}
        >
          <mesh
            name="Object_186055"
            castShadow
            receiveShadow
            geometry={nodes.Object_186055.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.172, 0.01]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1026"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1026.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.893, 0.301, -1.156]}
          rotation={[2.438, 1.525, -2.423]}
        >
          <mesh
            name="Object_186102"
            castShadow
            receiveShadow
            geometry={nodes.Object_186102.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.264, 0.015]}
            rotation={[-3.117, -0.599, 0.254]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1023"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1023.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-1.402, 0.309, -4.831]}
          rotation={[-3.099, -0.675, -3.112]}
        >
          <mesh
            name="Object_186099"
            castShadow
            receiveShadow
            geometry={nodes.Object_186099.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.275, 0.016]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1024"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1024.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-1.233, 0.312, -4.808]}
          rotation={[0.045, 1.159, -0.07]}
        >
          <mesh
            name="Object_186100"
            castShadow
            receiveShadow
            geometry={nodes.Object_186100.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.172, 0.01]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1025"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1025.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-1.259, 0.328, -4.952]}
          rotation={[3.019, -1.327, 3.038]}
        >
          <mesh
            name="Object_186101"
            castShadow
            receiveShadow
            geometry={nodes.Object_186101.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.264, 0.015]}
            rotation={[-3.117, -0.599, 0.254]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1034"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1034.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-1.051, 0.358, -4.917]}
          rotation={[-3.095, 0.765, 3.113]}
          scale={0.808}
        >
          <mesh
            name="Object_186113"
            castShadow
            receiveShadow
            geometry={nodes.Object_186113.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.275, 0.016]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1035"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1035.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-0.915, 0.321, -4.801]}
          rotation={[-0.102, 1.237, 0.099]}
          scale={0.918}
        >
          <mesh
            name="Object_186114"
            castShadow
            receiveShadow
            geometry={nodes.Object_186114.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.275, 0.016]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1027"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1027.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.769, -0.002, 0.195]}
          rotation={[-2.816, -1.466, -2.815]}
          scale={0.918}
        >
          <mesh
            name="Object_186106"
            castShadow
            receiveShadow
            geometry={nodes.Object_186106.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.275, 0.016]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1028"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1028.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.566, -0.008, 0.239]}
          rotation={[3.123, 0.18, 3.117]}
          scale={0.829}
        >
          <mesh
            name="Object_186107"
            castShadow
            receiveShadow
            geometry={nodes.Object_186107.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.172, 0.01]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1029"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1029.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.592, 0.005, 0.095]}
          rotation={[3.112, 0.043, -3.125]}
          scale={0.848}
        >
          <mesh
            name="Object_186108"
            castShadow
            receiveShadow
            geometry={nodes.Object_186108.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.264, 0.015]}
            rotation={[-3.117, -0.599, 0.254]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1014"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1014.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-4.448, 0.264, -4.206]}
          rotation={[Math.PI, -0.673, Math.PI]}
        >
          <mesh
            name="Object_186066"
            castShadow
            receiveShadow
            geometry={nodes.Object_186066.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.003, 0.217, 0.012]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1015"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1015.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-4.451, 0.359, -4.365]}
          rotation={[0, -0.239, 0]}
        >
          <mesh
            name="Object_186067"
            castShadow
            receiveShadow
            geometry={nodes.Object_186067.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.163, 0.009]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1016"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1016.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-4.319, 0.325, -4.327]}
          rotation={[0, 1.249, 0]}
        >
          <mesh
            name="Object_186068"
            castShadow
            receiveShadow
            geometry={nodes.Object_186068.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.25, 0.014]}
            rotation={[-3.114, -0.598, 0.256]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1030"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1030.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-0.571, 0.281, -5.26]}
          rotation={[2.965, 0.961, -2.926]}
          scale={1.092}
        >
          <mesh
            name="Object_186109"
            castShadow
            receiveShadow
            geometry={nodes.Object_186109.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.003, 0.217, 0.012]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1031"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1031.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-0.355, 0.196, -5.327]}
          rotation={[-2.779, -1.235, -2.76]}
          scale={1.092}
        >
          <mesh
            name="Object_186110"
            castShadow
            receiveShadow
            geometry={nodes.Object_186110.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.163, 0.009]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1032"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1032.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-0.428, 0.228, -5.189]}
          rotation={[-0.05, -0.392, -0.133]}
          scale={1.092}
        >
          <mesh
            name="Object_186111"
            castShadow
            receiveShadow
            geometry={nodes.Object_186111.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.25, 0.014]}
            rotation={[-3.114, -0.598, 0.256]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1033"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1033.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-0.315, 0.201, -5.033]}
          rotation={[-2.925, 0.995, 2.997]}
          scale={0.926}
        >
          <mesh
            name="Object_186112"
            castShadow
            receiveShadow
            geometry={nodes.Object_186112.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.163, 0.009]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1006"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1006.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.689, 0.612, -4.328]}
          rotation={[3.133, -0.207, 3.089]}
          scale={0.881}
        >
          <mesh
            name="Object_186058"
            castShadow
            receiveShadow
            geometry={nodes.Object_186058.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.003, 0.261, 0.015]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1007"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1007.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.857, 0.568, -4.019]}
          rotation={[0.062, -0.586, 0.04]}
          scale={1.134}
        >
          <mesh
            name="Object_186059"
            castShadow
            receiveShadow
            geometry={nodes.Object_186059.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.003, 0.196, 0.011]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1008"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1008.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.706, 0.628, -3.769]}
          rotation={[-3.081, 0.594, 3.119]}
        >
          <mesh
            name="Object_186060"
            castShadow
            receiveShadow
            geometry={nodes.Object_186060.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.005, 0.3, 0.017]}
            rotation={[-3.132, -0.603, 0.252]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1009"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1009.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.729, 0.631, -4.144]}
          rotation={[3.116, -1.327, 3.065]}
        >
          <mesh
            name="Object_186061"
            castShadow
            receiveShadow
            geometry={nodes.Object_186061.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.15, 0.009]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1017"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1017.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.689, 0.653, -4.026]}
          rotation={[3.116, -1.327, 3.065]}
        >
          <mesh
            name="Object_186050"
            castShadow
            receiveShadow
            geometry={nodes.Object_186050.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.15, 0.009]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1018"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1018.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.854, 0.609, -3.73]}
          rotation={[3.1, -1.368, 3.05]}
        >
          <mesh
            name="Object_186051"
            castShadow
            receiveShadow
            geometry={nodes.Object_186051.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.003, 0.261, 0.015]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1010"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1010.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-2.718, 0.541, -5.186]}
          rotation={[-0.032, 1.203, -0.003]}
        >
          <mesh
            name="Object_186062"
            castShadow
            receiveShadow
            geometry={nodes.Object_186062.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.319, 0.018]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1011"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1011.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-2.595, 0.546, -5.029]}
          rotation={[-0.041, -1.398, -0.006]}
        >
          <mesh
            name="Object_186063"
            castShadow
            receiveShadow
            geometry={nodes.Object_186063.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.003, 0.196, 0.011]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1012"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1012.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-2.925, 0.559, -5.145]}
          rotation={[-0.035, -0.066, -0.001]}
        >
          <mesh
            name="Object_186064"
            castShadow
            receiveShadow
            geometry={nodes.Object_186064.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.005, 0.3, 0.017]}
            rotation={[-3.138, -0.605, 0.25]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1013"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1013.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-2.888, 0.564, -4.945]}
          rotation={[-0.033, 1.162, -0.002]}
        >
          <mesh
            name="Object_186065"
            castShadow
            receiveShadow
            geometry={nodes.Object_186065.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.15, 0.009]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1019"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1019.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-6.099, 0.475, -1.967]}
          rotation={[-0.012, -0.356, -0.037]}
        >
          <mesh
            name="Object_186095"
            castShadow
            receiveShadow
            geometry={nodes.Object_186095.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.004, 0.319, 0.018]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1020"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1020.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.936, 0.544, -1.856]}
          rotation={[-3.13, -0.957, -3.097]}
        >
          <mesh
            name="Object_186096"
            castShadow
            receiveShadow
            geometry={nodes.Object_186096.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.003, 0.196, 0.011]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1021"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1021.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-5.901, 0.543, -2.09]}
          rotation={[-2.573, -1.506, -2.573]}
        >
          <mesh
            name="Object_186097"
            castShadow
            receiveShadow
            geometry={nodes.Object_186097.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.005, 0.3, 0.017]}
            rotation={[-3.138, -0.605, 0.25]}
          />
        </mesh>
        <mesh
          name="GREY_TREE_1022"
          castShadow
          receiveShadow
          geometry={nodes.GREY_TREE_1022.geometry}
          material={materials["VITALITY LIGHT GREY"]}
          position={[-6.019, 0.501, -2.155]}
          rotation={[-0.014, -0.397, -0.038]}
        >
          <mesh
            name="Object_186098"
            castShadow
            receiveShadow
            geometry={nodes.Object_186098.geometry}
            material={materials["VITALITY GREY"]}
            position={[-0.002, 0.15, 0.009]}
            rotation={[0.088, -0.002, 0.407]}
          />
        </mesh>
        <mesh
          name="CLOUDSML001"
          castShadow
          receiveShadow
          geometry={nodes.CLOUDSML001.geometry}
          material={materials.CLOUD}
          position={[-0.126, 2.486, -3.81]}
          scale={[3.043, 0.774, 1.93]}
        >
          <mesh
            name="Icosphere001"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001.geometry}
            material={materials.CLOUD}
            position={[0.309, 0.228, 0]}
            scale={0.764}
          />
        </mesh>
        <mesh
          name="CLOUDLRG001"
          castShadow
          receiveShadow
          geometry={nodes.CLOUDLRG001.geometry}
          material={materials.CLOUD}
          position={[-3.139, 2.44, -3.202]}
          scale={[3.557, 0.902, 2.136]}
        >
          <mesh
            name="Icosphere003"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere003.geometry}
            material={materials.CLOUD}
            position={[0.229, 0.314, 0]}
            scale={[0.659, 0.842, 0.764]}
          />
          <mesh
            name="Icosphere004"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere004.geometry}
            material={materials.CLOUD}
            position={[-0.285, 0.183, -0.171]}
            scale={[0.659, 0.891, 0.764]}
          />
        </mesh>
        <mesh
          name="CLOUDLRG002"
          castShadow
          receiveShadow
          geometry={nodes.CLOUDLRG002.geometry}
          material={materials.CLOUD}
          position={[0.344, 2.461, 1.122]}
          scale={[3.557, 0.829, 2.136]}
        >
          <mesh
            name="Icosphere006"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere006.geometry}
            material={materials.CLOUD}
            position={[-0.307, 0.314, -0.011]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[0.774, 0.842, 0.897]}
          />
          <mesh
            name="Icosphere007"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere007.geometry}
            material={materials.CLOUD}
            position={[0.212, 0.033, -0.307]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[0.66, 0.891, 0.925]}
          />
        </mesh>
        <mesh
          name="CLOUDSML002"
          castShadow
          receiveShadow
          geometry={nodes.CLOUDSML002.geometry}
          material={materials.CLOUD}
          position={[-4.462, 2.483, 0.192]}
          scale={[3.028, 0.681, 1.48]}
        >
          <mesh
            name="Icosphere002"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere002.geometry}
            material={materials.CLOUD}
            position={[0.326, -0.211, -0.136]}
            scale={[0.582, 0.764, 0.764]}
          />
        </mesh>
        <group name="BIRD_PATH001" />
        <group name="BIRD_PATH002" />
        <group name="BIRD_PATH003" />
        <group
          name="BIRD001"
          position={[0.938, 0.79, 2.014]}
          rotation={[3.138, 1.239, -3.136]}
        >
          <group name="BirdArm1" rotation={[3.141, -0.002, -3.137]}>
            <group name="BIRDarm001">
              <skinnedMesh
                name="Cylinder021_1"
                geometry={nodes.Cylinder021_1.geometry}
                material={materials["VITALITY BLACK"]}
                skeleton={nodes.Cylinder021_1.skeleton}
                morphTargetDictionary={
                  nodes.Cylinder021_1.morphTargetDictionary
                }
                morphTargetInfluences={
                  nodes.Cylinder021_1.morphTargetInfluences
                }
              />
              <skinnedMesh
                name="Cylinder021_2"
                geometry={nodes.Cylinder021_2.geometry}
                material={materials["DUCK YELLOW"]}
                skeleton={nodes.Cylinder021_2.skeleton}
                morphTargetDictionary={
                  nodes.Cylinder021_2.morphTargetDictionary
                }
                morphTargetInfluences={
                  nodes.Cylinder021_2.morphTargetInfluences
                }
              />
            </group>
            <primitive object={nodes.spine003_4} />
          </group>
        </group>
        <group
          name="BIRD002"
          position={[-2.684, 1.06, 1.646]}
          rotation={[3.138, 1.24, -3.137]}
        >
          <group name="BirdArm2" rotation={[3.141, 0, -3.137]}>
            <group name="BIRDarm002">
              <skinnedMesh
                name="Cylinder116"
                geometry={nodes.Cylinder116.geometry}
                material={materials["VITALITY BLACK"]}
                skeleton={nodes.Cylinder116.skeleton}
                morphTargetDictionary={nodes.Cylinder116.morphTargetDictionary}
                morphTargetInfluences={nodes.Cylinder116.morphTargetInfluences}
              />
              <skinnedMesh
                name="Cylinder116_1"
                geometry={nodes.Cylinder116_1.geometry}
                material={materials["DUCK YELLOW"]}
                skeleton={nodes.Cylinder116_1.skeleton}
                morphTargetDictionary={
                  nodes.Cylinder116_1.morphTargetDictionary
                }
                morphTargetInfluences={
                  nodes.Cylinder116_1.morphTargetInfluences
                }
              />
            </group>
            <primitive object={nodes.spine003_5} />
          </group>
        </group>
        <group
          name="BIRD003"
          position={[-3.261, 1.011, -2.681]}
          rotation={[-3.128, 0.184, -2.79]}
        >
          <group name="BirdArm2001" rotation={[3.141, 0, -3.137]}>
            <group name="BIRDarm003">
              <skinnedMesh
                name="Cylinder117"
                geometry={nodes.Cylinder117.geometry}
                material={materials["VITALITY BLACK"]}
                skeleton={nodes.Cylinder117.skeleton}
                morphTargetDictionary={nodes.Cylinder117.morphTargetDictionary}
                morphTargetInfluences={nodes.Cylinder117.morphTargetInfluences}
              />
              <skinnedMesh
                name="Cylinder117_1"
                geometry={nodes.Cylinder117_1.geometry}
                material={materials["DUCK YELLOW"]}
                skeleton={nodes.Cylinder117_1.skeleton}
                morphTargetDictionary={
                  nodes.Cylinder117_1.morphTargetDictionary
                }
                morphTargetInfluences={
                  nodes.Cylinder117_1.morphTargetInfluences
                }
              />
            </group>
            <primitive object={nodes.spine003_6} />
          </group>
        </group>
        <group
          name="BIRD004"
          position={[-3.107, 0.371, -0.926]}
          rotation={[-1.381, -1.547, -1.933]}
        >
          <group name="BirdArm2002" rotation={[3.141, 0, -3.137]}>
            <group name="BIRDarm004">
              <skinnedMesh
                name="Cylinder110"
                geometry={nodes.Cylinder110.geometry}
                material={materials["VITALITY BLACK"]}
                skeleton={nodes.Cylinder110.skeleton}
                morphTargetDictionary={nodes.Cylinder110.morphTargetDictionary}
                morphTargetInfluences={nodes.Cylinder110.morphTargetInfluences}
              />
              <skinnedMesh
                name="Cylinder110_1"
                geometry={nodes.Cylinder110_1.geometry}
                material={materials["DUCK YELLOW"]}
                skeleton={nodes.Cylinder110_1.skeleton}
                morphTargetDictionary={
                  nodes.Cylinder110_1.morphTargetDictionary
                }
                morphTargetInfluences={
                  nodes.Cylinder110_1.morphTargetInfluences
                }
              />
            </group>
            <primitive object={nodes.spine003_7} />
          </group>
        </group>
        <group
          name="BIRD005"
          position={[0.991, 0.804, -0.101]}
          rotation={[2.866, -1.363, 2.843]}
        >
          <group name="BirdArm1001" rotation={[3.141, -0.002, -3.137]}>
            <group name="BIRDarm005">
              <skinnedMesh
                name="Cylinder111"
                geometry={nodes.Cylinder111.geometry}
                material={materials["VITALITY BLACK"]}
                skeleton={nodes.Cylinder111.skeleton}
                morphTargetDictionary={nodes.Cylinder111.morphTargetDictionary}
                morphTargetInfluences={nodes.Cylinder111.morphTargetInfluences}
              />
              <skinnedMesh
                name="Cylinder111_1"
                geometry={nodes.Cylinder111_1.geometry}
                material={materials["DUCK YELLOW"]}
                skeleton={nodes.Cylinder111_1.skeleton}
                morphTargetDictionary={
                  nodes.Cylinder111_1.morphTargetDictionary
                }
                morphTargetInfluences={
                  nodes.Cylinder111_1.morphTargetInfluences
                }
              />
            </group>
            <primitive object={nodes.spine003_8} />
          </group>
        </group>
        <group
          name="BIRD006"
          position={[0.575, 0.669, -2.839]}
          rotation={[0.012, 0.263, 0.56]}
        >
          <group name="BirdArm2003" rotation={[3.141, 0, -3.137]}>
            <group name="BIRDarm006">
              <skinnedMesh
                name="Cylinder112"
                geometry={nodes.Cylinder112.geometry}
                material={materials["VITALITY BLACK"]}
                skeleton={nodes.Cylinder112.skeleton}
                morphTargetDictionary={nodes.Cylinder112.morphTargetDictionary}
                morphTargetInfluences={nodes.Cylinder112.morphTargetInfluences}
              />
              <skinnedMesh
                name="Cylinder112_1"
                geometry={nodes.Cylinder112_1.geometry}
                material={materials["DUCK YELLOW"]}
                skeleton={nodes.Cylinder112_1.skeleton}
                morphTargetDictionary={
                  nodes.Cylinder112_1.morphTargetDictionary
                }
                morphTargetInfluences={
                  nodes.Cylinder112_1.morphTargetInfluences
                }
              />
            </group>
            <primitive object={nodes.spine003_9} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/map.glb");
